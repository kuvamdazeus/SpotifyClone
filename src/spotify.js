export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://spotify-clone-0529.web.app";
const clientId = "d9b1c10b627344beb302606f7faf22cc";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
]
// https://spotify-clone-0529.web.app/#
// access_token=BQC1n2iKwUylbfYYfr9Gx8NFIlwsAgQvyIZHpHsvei6FuDs8mVOVju2mX03XhCeSKfVynY9wbCGwAF90HUBW-19X0dnY4wWlu0Kg9eKYLUOPPGZunTh7DdsTZznLZezXksSYi_j9DxSdz70ejI9DQaTfbNbCeV_zwT5lBkZ6x6rjLwIHsdgV
// &token_type=Bearer
// &expires_in=3600
export const getAccessToken = () => {
    console.log(window.location.href);
    if(window.location.href.length > 50) {
        return window.location.href.substring(window.location.href.indexOf('=') + 1).split("&")[0];
    } else {
        return null;
    }
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
