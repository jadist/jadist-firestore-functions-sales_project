import * as glob from "glob";

class DynamicExport {
  runThis() {
    const files = glob.sync("./**/*.f.js", {
      cwd: __dirname,
      ignore: "../node_modules/**",
    });

    for (let f = 0, fl = files.length; f < fl; f++) {
      const file = files[f];
      const functionName = this.camelCase(file);

      exports[functionName] = require(file);
    }
  }

  private camelCase(file: string): string {
    console.log(file);
    const result = file.slice(0, -5).split("/").join("").replace(".", "");
    console.log(result);

    return result;
  }
}

new DynamicExport().runThis();
