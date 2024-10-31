import { Amplify } from "aws-amplify";
export default defineNuxtPlugin(() => {
  Amplify.configure({
    API: {
      Events: {
        endpoint:
          "https://ksnlero6pba6lmnw3kkcpwaxqq.appsync-api.us-east-2.amazonaws.com/event",
        region: "us-east-2",
        defaultAuthMode: "apiKey",
        apiKey: "da2-ihdq7cc2nve6hcljlrp3tvopba",
      },
    },
  });
});
