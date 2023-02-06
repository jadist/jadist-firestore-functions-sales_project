import * as jose from "jose";
import { ValidationReturnMessage } from "./firebase-validation.model";

export async function validate(jwt: string): Promise<ValidationReturnMessage> {
  try {
    /**
     * X509 certificate is based on https://firebase.google.com/docs/auth/admin/verify-id-tokens#verify_id_tokens_using_a_third-party_jwt_library
     * Change it if needed
     */
    const alg = "RS256";
    const spki = `-----BEGIN CERTIFICATE-----
          MIIDHTCCAgWgAwIBAgIJALSL/zczfjCwMA0GCSqGSIb3DQEBBQUAMDExLzAtBgNV
          BAMMJnNlY3VyZXRva2VuLnN5c3RlbS5nc2VydmljZWFjY291bnQuY29tMB4XDTIz
          MDEzMDA5MzkxN1oXDTIzMDIxNTIxNTQxN1owMTEvMC0GA1UEAwwmc2VjdXJldG9r
          ZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wggEiMA0GCSqGSIb3DQEBAQUA
          A4IBDwAwggEKAoIBAQCkAxEme5T8XDk+gxDuAJ2rRCz8j/zGYGhXKdYLZPLlFvJX
          DInvHABAHRPpbI6BkjmRgVFRdxMssbS1OXQKPrhaha4zHOE17PfSItK/fNbrtvAA
          AQTy5T/1O9PcrMVAkz0vYCfPP887U/18DjyEdl0K/Ztv6Mg2hy10NxNjrmXekFSA
          Z1789z+VUTCtnVQAtCH/lrC8gMQgUGgoVTSul06YYjbbPMiV9XYsGrPv7HQaniCm
          aHtMM7z9U2HZPUM92HDy2SsX5z2PLcfG+9MpvjIbDJP2aOlKkmxmXC4C8tNpzgBb
          vR9J8aiflv5tbZ0bjzx9R7xlF9/FJM25eG1JIxtDAgMBAAGjODA2MAwGA1UdEwEB
          /wQCMAAwDgYDVR0PAQH/BAQDAgeAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMCMA0G
          CSqGSIb3DQEBBQUAA4IBAQB9JPe64kG4d9ij8OYv9ooq//exgbjhyXAJHieq7ajl
          L/1VR/7WP7KurQ/NfR0Dt6W51pDtYCWMA2Ni2xIYIk/fEGZAGr2rLTdUkE2tUFeH
          jXXiY0FPWGxNiqZbo9OH5GgIFqy3UxwG28h+AynwlPmQrpGnH0E6rXdRH/sZ36BB
          qfqRVoziivwsZWqwLhrZrgH3zzMGRSFmFqlJytJTT+5tmWvF56lUgJsEFhMgG+jC
          b0KxMVTJx5Uiz9lCpao3XLs05M8hxfX8SAXuaaWujx8RXLwbw6vvrpofvCHVoQh7
          5M0PEdD64VwRMVM/ckOTwz5pmH+LJ7lfB56xyJM+EqCd
          -----END CERTIFICATE-----
          `;

    const publicKey = await jose.importX509(spki, alg);

    /**
     * MAKE SURE to change below, as required!
     */
    const { payload } = await jose.jwtVerify(jwt, publicKey, {
      issuer: "https://securetoken.google.com/jadist-sembako",
      audience: "jadist-sembako",
    });

    return {
      IsTrue: true,
      Payload: payload,
    };
  } catch (err) {
    return {
      IsTrue: false,
      ErrorMessage: String(err),
    };
  }
}
