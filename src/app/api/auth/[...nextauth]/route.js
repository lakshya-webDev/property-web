import { TokenSet } from "next-auth";
import NextAuth from "next-auth/next";
import { Provider } from "next-auth/providers";
export async function GET(request) {
    console.log(process.env,request,"ENV");
}
const TProvider = "Amazon" | "Apple" | "Facebook" | "Google"
  
//   function getProvider(provider) {
//      return {
//       id: `cognito_${provider.toLowerCase()}`,
//       name: `Cognito${provider}`,
//       type: "oauth",
//       clientId: COGNITO_CLIENT_ID,
//       clientSecret: COGNITO_CLIENT_SECRET,
//       wellKnown: `https://cognito-idp.${COGNITO_REGION}.amazonaws.com/${COGNITO_USER_POOL_ID}/.well-known/openid-configuration`,
//       authorization: {
//         url: `${COGNITO_DOMAIN}/oauth2/authorize`,
//         params: {
//           response_type: "code",
//           client_id: COGNITO_CLIENT_ID,
//           identity_provider: provider,
//           redirect_uri: `${NEXTAUTH_URL}/api/auth/callback/cognito_${provider.toLowerCase()}`
//         }
//       },
//       token: {
//         url: `${COGNITO_DOMAIN}/oauth2/token`,
//         params: {
//           grant_type: "authorization_code",
//           client_id: COGNITO_CLIENT_ID,
//           client_secret: COGNITO_CLIENT_SECRET,
//           redirect_uri: `${NEXTAUTH_URL}/api/auth/callback/cognito_${provider.toLowerCase()}`
//         }
//       },
//       userinfo: {
//         url: `${COGNITO_DOMAIN}/oauth2/userInfo`,
//       },
//       profile: function(profile) {
//         return {
//           id: profile.sub,
//           ...profile
//         }
//       }
//     }
//   }
  
//   export const authOptions = {
//     providers: [
//       ...["Amazon", "Apple", "Facebook", "Google"].map((provider) => getProvider(provider)),
//     ],
//     callbacks: {
//       async signIn({ user, account, profile }) {
//         return true;
//       },
//       async redirect({ url, baseUrl }){
//         return baseUrl;
//       },
//       async jwt({ token, account, profile, user }){
//         if (account) {
//           return {
//             ...token,
//             accessToken: account.access_token,
//             idToken: account.id_token,
//           }
//         }
//       },
//       async session({ session, token }) {
//         session.accessToken = token.accessToken;
//         session.idToken = token.idToken;
//         return session;
//       }
//     }
//   };