import { Amplify } from "aws-amplify";
import { events } from "aws-amplify/data";
import config from "@/src/amplifyConfig.json";
export default defineNuxtPlugin(() => {
  Amplify.configure(config, { ssr: true });
});
