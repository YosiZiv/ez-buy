import mongoose from "mongoose";
// An interface that describes the properties
// that are requried to create a new locker
interface LockerAttrs {
  name: string;
  password: string;
}
interface Location {
  lat: string;
  lon: string;
}
// An interface that describes the properties
// that a Locker Model has
interface LockerModel extends mongoose.Model<LockerDoc> {
  build(attrs: LockerAttrs): LockerDoc;
}

// An interface that describes the properties
// that a Locker Document has
interface LockerDoc extends mongoose.Document {
  name: string;
  shelves: [object];
  location: Location;
}

const LockerSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>("User", userSchema);

export { User };
