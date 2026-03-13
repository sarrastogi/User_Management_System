import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },

    phone: {
      type: String,
      required: true,
      unique: true,
      match: [/^[0-9]+$/, "Phone number must contain only digits"],
    },

    walletBalance: {
      type: Number,
      default: 0,
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },

    kycStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },

    deviceInfo: {
      ipAddress: {
        type: String,
      },
      deviceType: {
        type: String,
        enum: ["Mobile", "Desktop"],
      },
      os: {
        type: String,
        enum: ["Android", "iOS", "Windows", "macOS", "Linux"],
      },
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export { User };
