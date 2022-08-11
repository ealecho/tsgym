import { UserContactInfo } from "./types";

const printContactInfo = (info: UserContactInfo ) => {
    console.log(info);
    console.log(info.email);
}

const painter: UserContactInfo = {
    name: "Robert Ross",
    email: "bross@pbs.org",
}