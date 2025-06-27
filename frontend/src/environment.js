let IS_PROD = true;
const server = IS_PROD
  ? "https://videomeet-4-zuep.onrender.com" 
  : "http://localhost:8000";

export default server;

