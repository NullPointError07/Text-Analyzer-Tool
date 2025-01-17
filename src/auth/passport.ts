import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const googleClientId = process.env.GOOGLE_CLIENT_ID || "";
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET || "";
const googleCallbackUrl = `${process.env.BASE_URL}/auth/google/callback`;

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientId,
      clientSecret: googleClientSecret,
      callbackURL: googleCallbackUrl,
    },
    (accessToken, refreshToken, profile, done) => {
      // This is where you can save user data to the database
      console.log(profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});
