import { Client } from "react-native-appwrite";
import { apiEndpoint, platformUrl, projectId } from "./keys";

const client = new Client()
  .setEndpoint(apiEndpoint)
  .setProject(projectId)
  .setPlatform(platformUrl);
