import passport from "passport";
import dotenv from "dotenv";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userModel";

dotenv.config();

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
    async (accessToken, refreshToken, profile, done) => {
      let user = await User.findOne({ googleId: profile.id });
      console.log("profile", profile);
      if (!user) {
        user = await User.create({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails?.[0].value || "",
          profilePicture: profile.photos?.[0].value || "",
        });
      }
      return done(null, profile);
    }
  )
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.find({ googleId: id });
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});
