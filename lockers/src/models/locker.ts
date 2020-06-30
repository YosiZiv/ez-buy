import mongoose from "mongoose";
// An interface that describes the properties
// that are requried to create a new locker
const createLockers = () => {
  const lockerArray = [];
  for (let i = 0; i < 5; i++) {
    lockerArray.push({ id: mongoose.Types.ObjectId(), available: true });
  }
  return lockerArray;
};
interface LockerAttrs {
  name: string;
  location: Location;
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
  location: Location;
}

const LockerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    shelves: {
      type: [Object],
      required: true,
    },
    location: {
      type: [Object],
      required: true,
    },
    availableSpots: {
      type: Number,
      required: true,
      default: 5,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);
LockerSchema.pre("save", function (done) {
  this.set("shelves", createLockers());
  done();
});

LockerSchema.statics.build = (attrs: LockerAttrs) => {
  return new Locker(attrs);
};

const Locker = mongoose.model<LockerDoc, LockerModel>("Locker", LockerSchema);

export { Locker };
