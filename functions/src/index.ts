import * as glob from "glob";

class DynamicExport {
  runThis() {
    const files = glob.sync("./**/*.f.js", {
      cwd: __dirname,
      ignore: "../node_modules/**",
    });

    for (let f = 0, fl = files.length; f < fl; f++) {
      const file = files[f];
      const functionName = this.myCamelCase(file);

      exports[functionName] = require(file);
    }
  }

  private myCamelCase(file: string): string {
    let result = "";

    const aCamelCase: string[] = [];

    const aa = file.slice(0, -5).split("/");
    aa.forEach((a) => {
      const charUsed = this.unUsedChar(a);

      if (charUsed.length > 0) {
        aCamelCase.push(
          `${charUsed.substring(0, 1).toUpperCase()}${charUsed.substring(
            1,
            charUsed.length
          )}`
        );
      }
    });

    const bCamelCase = aCamelCase.join("");

    result = `${bCamelCase.substring(0, 1).toLowerCase()}${bCamelCase.substring(
      1,
      bCamelCase.length
    )}`;

    return result;
  }

  private unUsedChar(char: string): string {
    let result = "";

    switch (char) {
      case ".":
      case ",":
      case "-":
        break;
      default:
        result = char;
    }

    return result;
  }
}

new DynamicExport().runThis();
