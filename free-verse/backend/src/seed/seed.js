import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "../models/user.model.js";
import { Video } from "../models/video.model.js";
import { Playlist } from "../models/playlist.model.js";
import { Comment } from "../models/comment.model.js";
import { Like } from "../models/like.model.js";
import { Subscription } from "../models/subscription.model.js";
import { Tweet } from "../models/tweet.model.js";
import connectToDatabase from "../db/index.js";

dotenv.config(); // Load environment variables

// Connect to MongoDB
connectToDatabase();

const users = [
  {
    _id: "668b38953119452dbdb6fef9",
    username: "user_1",
    email: "user1@example.com",
    fullName: "User 1",
    password: "hashedpassword",
    avatar:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742055900/avatar_1_nsmqak.jpg",
    coverImage: "",
    description: "Description for User 1",
    watchHistory: [],
    createdAt: "2025-03-15T17:48:21.726Z",
    updatedAt: "2025-03-15T17:48:21.726Z",
    __v: 0,
  },
  {
    _id: "0e9ffd50bc134b47b26de2e6",
    username: "user_2",
    email: "user2@example.com",
    fullName: "User 2",
    password: "hashedpassword",
    avatar:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742055975/avatar_2_sw1ffy.jpg",
    coverImage: "",
    description: "Description for User 2",
    watchHistory: [],
    createdAt: "2025-03-15T17:48:21.726Z",
    updatedAt: "2025-03-15T17:48:21.726Z",
    __v: 0,
  },
  {
    _id: "937da282a06e4962b5610703",
    username: "user_3",
    email: "user3@example.com",
    fullName: "User 3",
    password: "hashedpassword",
    avatar:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742055900/avatar_1_nsmqak.jpg",
    coverImage: "",
    description: "Description for User 3",
    watchHistory: [],
    createdAt: "2025-03-15T17:48:21.726Z",
    updatedAt: "2025-03-15T17:48:21.726Z",
    __v: 0,
  },
  {
    _id: "7680f4971de249848c9a3361",
    username: "user_4",
    email: "user4@example.com",
    fullName: "User 4",
    password: "hashedpassword",
    avatar:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742055975/avatar_2_sw1ffy.jpg",
    coverImage: "",
    description: "Description for User 4",
    watchHistory: [],
    createdAt: "2025-03-15T17:48:21.726Z",
    updatedAt: "2025-03-15T17:48:21.726Z",
    __v: 0,
  },
  {
    _id: "4f42a8d5cf65458abe94f7e8",
    username: "user_5",
    email: "user5@example.com",
    fullName: "User 5",
    password: "hashedpassword",
    avatar:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742055900/avatar_1_nsmqak.jpg",
    coverImage: "",
    description: "Description for User 5",
    watchHistory: [],
    createdAt: "2025-03-15T17:48:21.726Z",
    updatedAt: "2025-03-15T17:48:21.726Z",
    __v: 0,
  },
  {
    _id: "3b6268e253294a43ba01528f",
    username: "user_6",
    email: "user6@example.com",
    fullName: "User 6",
    password: "hashedpassword",
    avatar:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742055900/avatar_1_nsmqak.jpg",
    coverImage: "",
    description: "Description for User 6",
    watchHistory: [],
    createdAt: "2025-03-15T17:48:21.726Z",
    updatedAt: "2025-03-15T17:48:21.726Z",
    __v: 0,
  },
  {
    _id: "11c56b3ba8f94b748b171482",
    username: "user_7",
    email: "user7@example.com",
    fullName: "User 7",
    password: "hashedpassword",
    avatar:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742055900/avatar_1_nsmqak.jpg",
    coverImage: "",
    description: "Description for User 7",
    watchHistory: [],
    createdAt: "2025-03-15T17:48:21.726Z",
    updatedAt: "2025-03-15T17:48:21.726Z",
    __v: 0,
  },
  {
    _id: "a29db25a4a1e41d8b32a3dbb",
    username: "user_8",
    email: "user8@example.com",
    fullName: "User 8",
    password: "hashedpassword",
    avatar:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742055975/avatar_2_sw1ffy.jpg",
    coverImage: "",
    description: "Description for User 8",
    watchHistory: [],
    createdAt: "2025-03-15T17:48:21.726Z",
    updatedAt: "2025-03-15T17:48:21.726Z",
    __v: 0,
  },
  {
    _id: "08bf2e83e16f433885992272",
    username: "user_9",
    email: "user9@example.com",
    fullName: "User 9",
    password: "hashedpassword",
    avatar:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742055975/avatar_2_sw1ffy.jpg",
    coverImage: "",
    description: "Description for User 9",
    watchHistory: [],
    createdAt: "2025-03-15T17:48:21.726Z",
    updatedAt: "2025-03-15T17:48:21.726Z",
    __v: 0,
  },
  {
    _id: "a09ff895910b4848906e0633",
    username: "user_10",
    email: "user10@example.com",
    fullName: "User 10",
    password: "hashedpassword",
    avatar:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742055975/avatar_2_sw1ffy.jpg",
    coverImage: "",
    description: "Description for User 10",
    watchHistory: [],
    createdAt: "2025-03-15T17:48:21.726Z",
    updatedAt: "2025-03-15T17:48:21.726Z",
    __v: 0,
  },
];
const videos = [
  {
    _id: "4f23e2268f5245a0978a1e65",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 1 Title",
    description: "Description for Video 1",
    duration: 3.5,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056014/thumbnail_2_y5kdb3.jpg",
    views: 2154,
    isPublished: true,
    owner: "937da282a06e4962b5610703",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "211b867bd6b74c2d8aec0003",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 2 Title",
    description: "Description for Video 2",
    duration: 4.0,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056030/thumbnail_1_tqjnpt.jpg",
    views: 187,
    isPublished: true,
    owner: "11c56b3ba8f94b748b171482",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "4aad544ce8604e87908e1075",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 3 Title",
    description: "Description for Video 3",
    duration: 4.5,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056030/thumbnail_1_tqjnpt.jpg",
    views: 2866,
    isPublished: true,
    owner: "4f42a8d5cf65458abe94f7e8",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "8d2b4936677c403188f392e8",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 4 Title",
    description: "Description for Video 4",
    duration: 5.0,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056030/thumbnail_1_tqjnpt.jpg",
    views: 1706,
    isPublished: true,
    owner: "08bf2e83e16f433885992272",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "c2da23d37c5d423ea9f62b96",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 5 Title",
    description: "Description for Video 5",
    duration: 5.5,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056030/thumbnail_1_tqjnpt.jpg",
    views: 3481,
    isPublished: true,
    owner: "08bf2e83e16f433885992272",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "d3085bc86d5f489982d08e58",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 6 Title",
    description: "Description for Video 6",
    duration: 6.0,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056030/thumbnail_1_tqjnpt.jpg",
    views: 464,
    isPublished: true,
    owner: "937da282a06e4962b5610703",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "8fe92403ad2d4d0a81cf0749",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 7 Title",
    description: "Description for Video 7",
    duration: 6.5,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056030/thumbnail_1_tqjnpt.jpg",
    views: 3976,
    isPublished: true,
    owner: "0e9ffd50bc134b47b26de2e6",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "909935c8541d4464a64ba8f8",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 8 Title",
    description: "Description for Video 8",
    duration: 7.0,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056014/thumbnail_2_y5kdb3.jpg",
    views: 3396,
    isPublished: true,
    owner: "a29db25a4a1e41d8b32a3dbb",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "537b4f2225b2456fa5703c33",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 9 Title",
    description: "Description for Video 9",
    duration: 7.5,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056014/thumbnail_2_y5kdb3.jpg",
    views: 997,
    isPublished: true,
    owner: "a09ff895910b4848906e0633",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "73315d5a7adb47febec70973",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 10 Title",
    description: "Description for Video 10",
    duration: 8.0,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056014/thumbnail_2_y5kdb3.jpg",
    views: 1916,
    isPublished: true,
    owner: "3b6268e253294a43ba01528f",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "987ead4ef5b74c84a19c77f1",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 11 Title",
    description: "Description for Video 11",
    duration: 8.5,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056014/thumbnail_2_y5kdb3.jpg",
    views: 787,
    isPublished: true,
    owner: "08bf2e83e16f433885992272",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "58ee9fd9e26e46cfa9ce9916",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 12 Title",
    description: "Description for Video 12",
    duration: 9.0,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056014/thumbnail_2_y5kdb3.jpg",
    views: 432,
    isPublished: true,
    owner: "a29db25a4a1e41d8b32a3dbb",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "36290eb31805491889517a12",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 13 Title",
    description: "Description for Video 13",
    duration: 9.5,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056014/thumbnail_2_y5kdb3.jpg",
    views: 4871,
    isPublished: true,
    owner: "4f42a8d5cf65458abe94f7e8",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "b631a50c8ce2463580ca8e60",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 14 Title",
    description: "Description for Video 14",
    duration: 10.0,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056030/thumbnail_1_tqjnpt.jpg",
    views: 687,
    isPublished: true,
    owner: "0e9ffd50bc134b47b26de2e6",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
  {
    _id: "f96740055e4c44a18c3b5759",
    videoFile:
      "https://res.cloudinary.com/dlf8r0wvq/video/upload/v1742056042/car_video_ygb5df.mp4",
    title: "Video 15 Title",
    description: "Description for Video 15",
    duration: 10.5,
    thumbnail:
      "https://res.cloudinary.com/dlf8r0wvq/image/upload/v1742056014/thumbnail_2_y5kdb3.jpg",
    views: 3738,
    isPublished: true,
    owner: "7680f4971de249848c9a3361",
    createdAt: "2025-03-15T06:41:57.356Z",
    updatedAt: "2025-03-15T08:08:00.197Z",
    __v: 0,
  },
];
const comments = [
  {
    _id: "18cc32a27b6640ef913cae77",
    content: "Great video 1!",
    video: "987ead4ef5b74c84a19c77f1",
    owner: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "f7701641de7e47539751e7f8",
    content: "Great video 2!",
    video: "211b867bd6b74c2d8aec0003",
    owner: "08bf2e83e16f433885992272",
    __v: 0,
  },
  {
    _id: "4165f34a95f64535bda9516c",
    content: "Great video 3!",
    video: "537b4f2225b2456fa5703c33",
    owner: "668b38953119452dbdb6fef9",
    __v: 0,
  },
  {
    _id: "8a113e48984d4b0c93076dd6",
    content: "Great video 4!",
    video: "987ead4ef5b74c84a19c77f1",
    owner: "937da282a06e4962b5610703",
    __v: 0,
  },
  {
    _id: "7dd5caf3e08c4b1f8da62252",
    content: "Great video 5!",
    video: "537b4f2225b2456fa5703c33",
    owner: "668b38953119452dbdb6fef9",
    __v: 0,
  },
  {
    _id: "ad0425ef4a3146ab801ad9e3",
    content: "Great video 6!",
    video: "73315d5a7adb47febec70973",
    owner: "0e9ffd50bc134b47b26de2e6",
    __v: 0,
  },
  {
    _id: "641329532c064e31a699ead1",
    content: "Great video 7!",
    video: "73315d5a7adb47febec70973",
    owner: "937da282a06e4962b5610703",
    __v: 0,
  },
  {
    _id: "73b7b00c4f494c85923809ee",
    content: "Great video 8!",
    video: "36290eb31805491889517a12",
    owner: "668b38953119452dbdb6fef9",
    __v: 0,
  },
  {
    _id: "aeab71b7d7ab45c7ae12761f",
    content: "Great video 9!",
    video: "b631a50c8ce2463580ca8e60",
    owner: "a29db25a4a1e41d8b32a3dbb",
    __v: 0,
  },
  {
    _id: "36b0a50c800b4fe19bed105d",
    content: "Great video 10!",
    video: "8fe92403ad2d4d0a81cf0749",
    owner: "a29db25a4a1e41d8b32a3dbb",
    __v: 0,
  },
  {
    _id: "f156331915594226b7f601fe",
    content: "Great video 11!",
    video: "909935c8541d4464a64ba8f8",
    owner: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
  {
    _id: "f82f284c16bf41178f99c5c0",
    content: "Great video 12!",
    video: "4f23e2268f5245a0978a1e65",
    owner: "08bf2e83e16f433885992272",
    __v: 0,
  },
  {
    _id: "252e14ea79824f6ca5e1634e",
    content: "Great video 13!",
    video: "909935c8541d4464a64ba8f8",
    owner: "0e9ffd50bc134b47b26de2e6",
    __v: 0,
  },
  {
    _id: "702a40ad8fd741988c3543a4",
    content: "Great video 14!",
    video: "8fe92403ad2d4d0a81cf0749",
    owner: "7680f4971de249848c9a3361",
    __v: 0,
  },
  {
    _id: "e855e57eb9e0401d84af54b0",
    content: "Great video 15!",
    video: "36290eb31805491889517a12",
    owner: "3b6268e253294a43ba01528f",
    __v: 0,
  },
  {
    _id: "e8228377ede54a728b2768dc",
    content: "Great video 16!",
    video: "73315d5a7adb47febec70973",
    owner: "a29db25a4a1e41d8b32a3dbb",
    __v: 0,
  },
  {
    _id: "d5fff015ab1c4225970825ee",
    content: "Great video 17!",
    video: "8fe92403ad2d4d0a81cf0749",
    owner: "08bf2e83e16f433885992272",
    __v: 0,
  },
  {
    _id: "0da59722304f4337a1b3ec1b",
    content: "Great video 18!",
    video: "4aad544ce8604e87908e1075",
    owner: "a29db25a4a1e41d8b32a3dbb",
    __v: 0,
  },
  {
    _id: "720cc2e009e14ab5a8b232f3",
    content: "Great video 19!",
    video: "b631a50c8ce2463580ca8e60",
    owner: "0e9ffd50bc134b47b26de2e6",
    __v: 0,
  },
  {
    _id: "a2040822c67340579dfadd09",
    content: "Great video 20!",
    video: "f96740055e4c44a18c3b5759",
    owner: "937da282a06e4962b5610703",
    __v: 0,
  },
  {
    _id: "fe1298e2d69a4fa9a73a6b0a",
    content: "Great video 21!",
    video: "4f23e2268f5245a0978a1e65",
    owner: "0e9ffd50bc134b47b26de2e6",
    __v: 0,
  },
  {
    _id: "1cf4b6539dfd462d8577c268",
    content: "Great video 22!",
    video: "4f23e2268f5245a0978a1e65",
    owner: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "ecf07de679634a26bdc07301",
    content: "Great video 23!",
    video: "8fe92403ad2d4d0a81cf0749",
    owner: "668b38953119452dbdb6fef9",
    __v: 0,
  },
  {
    _id: "9607e31a001f468499973ab2",
    content: "Great video 24!",
    video: "909935c8541d4464a64ba8f8",
    owner: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
  {
    _id: "f7699edce9a1437ba117ad3e",
    content: "Great video 25!",
    video: "d3085bc86d5f489982d08e58",
    owner: "4f42a8d5cf65458abe94f7e8",
    __v: 0,
  },
  {
    _id: "88ec69d462fb441fa20782b7",
    content: "Great video 26!",
    video: "8d2b4936677c403188f392e8",
    owner: "4f42a8d5cf65458abe94f7e8",
    __v: 0,
  },
  {
    _id: "eb8f83544fae4f55b3c83246",
    content: "Great video 27!",
    video: "58ee9fd9e26e46cfa9ce9916",
    owner: "a29db25a4a1e41d8b32a3dbb",
    __v: 0,
  },
  {
    _id: "0b40e1876e674eb08ffb6698",
    content: "Great video 28!",
    video: "b631a50c8ce2463580ca8e60",
    owner: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
  {
    _id: "df89a67a1cda47c59aafa137",
    content: "Great video 29!",
    video: "4f23e2268f5245a0978a1e65",
    owner: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
  {
    _id: "24ec2f2e1c314b0c8da23d99",
    content: "Great video 30!",
    video: "537b4f2225b2456fa5703c33",
    owner: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
];
const likes = [
  {
    _id: "cb28004679cf4ae29c062e87",
    liked: true,
    video: "b631a50c8ce2463580ca8e60",
    likedBy: "937da282a06e4962b5610703",
    __v: 0,
  },
  {
    _id: "6435489fcdda45deb35ef09a",
    liked: true,
    video: "36290eb31805491889517a12",
    likedBy: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
  {
    _id: "8b93a21db5d1422885138f2c",
    liked: true,
    video: "d3085bc86d5f489982d08e58",
    likedBy: "0e9ffd50bc134b47b26de2e6",
    __v: 0,
  },
  {
    _id: "3ac9b74fd1384f0d8881c40a",
    liked: true,
    video: "f96740055e4c44a18c3b5759",
    likedBy: "4f42a8d5cf65458abe94f7e8",
    __v: 0,
  },
  {
    _id: "3431648f4d5548678ab019ac",
    liked: true,
    video: "537b4f2225b2456fa5703c33",
    likedBy: "a29db25a4a1e41d8b32a3dbb",
    __v: 0,
  },
  {
    _id: "c38bd698450f43dfa519c132",
    liked: true,
    video: "c2da23d37c5d423ea9f62b96",
    likedBy: "937da282a06e4962b5610703",
    __v: 0,
  },
  {
    _id: "07d5c547e2d14f40a5b6ded6",
    liked: true,
    video: "73315d5a7adb47febec70973",
    likedBy: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "5fdca6f1efdc4c5eaaf3b3ca",
    liked: true,
    video: "987ead4ef5b74c84a19c77f1",
    likedBy: "4f42a8d5cf65458abe94f7e8",
    __v: 0,
  },
  {
    _id: "df70daf7f5114d5e9cfe7d28",
    liked: true,
    video: "537b4f2225b2456fa5703c33",
    likedBy: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "8256fca6acad40e7b4b17f20",
    liked: true,
    video: "537b4f2225b2456fa5703c33",
    likedBy: "937da282a06e4962b5610703",
    __v: 0,
  },
  {
    _id: "ed5902877ef043459be7eccb",
    liked: true,
    video: "537b4f2225b2456fa5703c33",
    likedBy: "668b38953119452dbdb6fef9",
    __v: 0,
  },
  {
    _id: "1e31e68628ef4bab9f1cacbf",
    liked: true,
    video: "987ead4ef5b74c84a19c77f1",
    likedBy: "08bf2e83e16f433885992272",
    __v: 0,
  },
  {
    _id: "ea1e9399441445f6816ac31e",
    liked: true,
    video: "8fe92403ad2d4d0a81cf0749",
    likedBy: "08bf2e83e16f433885992272",
    __v: 0,
  },
  {
    _id: "2796f4fe830145f1be403487",
    liked: true,
    video: "8fe92403ad2d4d0a81cf0749",
    likedBy: "4f42a8d5cf65458abe94f7e8",
    __v: 0,
  },
  {
    _id: "588d7be5e24a407f9e1fcaf7",
    liked: true,
    video: "4aad544ce8604e87908e1075",
    likedBy: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
  {
    _id: "e8697a0a93eb4ade9b389d42",
    liked: true,
    video: "987ead4ef5b74c84a19c77f1",
    likedBy: "937da282a06e4962b5610703",
    __v: 0,
  },
  {
    _id: "f7159886a43147abace7f833",
    liked: true,
    video: "b631a50c8ce2463580ca8e60",
    likedBy: "7680f4971de249848c9a3361",
    __v: 0,
  },
  {
    _id: "acf48da704e646a3af05ebcd",
    liked: true,
    video: "c2da23d37c5d423ea9f62b96",
    likedBy: "668b38953119452dbdb6fef9",
    __v: 0,
  },
  {
    _id: "23e8788e2e81424ebd6c23c1",
    liked: true,
    video: "73315d5a7adb47febec70973",
    likedBy: "0e9ffd50bc134b47b26de2e6",
    __v: 0,
  },
  {
    _id: "66e3440ad56343e88d495631",
    liked: true,
    video: "4f23e2268f5245a0978a1e65",
    likedBy: "937da282a06e4962b5610703",
    __v: 0,
  },
  {
    _id: "bb83bd368d1d49a1a2838311",
    liked: true,
    video: "8fe92403ad2d4d0a81cf0749",
    likedBy: "4f42a8d5cf65458abe94f7e8",
    __v: 0,
  },
  {
    _id: "32b1ad054ab64f3b880a1dfd",
    liked: true,
    video: "4f23e2268f5245a0978a1e65",
    likedBy: "08bf2e83e16f433885992272",
    __v: 0,
  },
  {
    _id: "7bbfba3305b84278bc990ba1",
    liked: true,
    video: "537b4f2225b2456fa5703c33",
    likedBy: "08bf2e83e16f433885992272",
    __v: 0,
  },
  {
    _id: "ad7f884d94a247c9b313ca41",
    liked: true,
    video: "73315d5a7adb47febec70973",
    likedBy: "3b6268e253294a43ba01528f",
    __v: 0,
  },
  {
    _id: "2e980414eb68434f9ac936dc",
    liked: true,
    video: "4f23e2268f5245a0978a1e65",
    likedBy: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
  {
    _id: "779eb63da375460d8a1eef78",
    liked: true,
    video: "8d2b4936677c403188f392e8",
    likedBy: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "5d3ea3455e3e4cb0b1abd6e0",
    liked: true,
    video: "d3085bc86d5f489982d08e58",
    likedBy: "0e9ffd50bc134b47b26de2e6",
    __v: 0,
  },
  {
    _id: "41d974fa67c6412da96b94c3",
    liked: true,
    video: "d3085bc86d5f489982d08e58",
    likedBy: "a29db25a4a1e41d8b32a3dbb",
    __v: 0,
  },
  {
    _id: "db9364932e55475d9be5aaba",
    liked: true,
    video: "f96740055e4c44a18c3b5759",
    likedBy: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "12c7b9772fa440d2b75f2775",
    liked: true,
    video: "c2da23d37c5d423ea9f62b96",
    likedBy: "08bf2e83e16f433885992272",
    __v: 0,
  },
  {
    _id: "b6b2cd02cf3c41f6a4b76c8f",
    liked: true,
    video: "987ead4ef5b74c84a19c77f1",
    likedBy: "7680f4971de249848c9a3361",
    __v: 0,
  },
  {
    _id: "d131da60a8e94ef48e3f4824",
    liked: true,
    video: "b631a50c8ce2463580ca8e60",
    likedBy: "a29db25a4a1e41d8b32a3dbb",
    __v: 0,
  },
  {
    _id: "73d445d975474dc2b83196c2",
    liked: true,
    video: "c2da23d37c5d423ea9f62b96",
    likedBy: "3b6268e253294a43ba01528f",
    __v: 0,
  },
  {
    _id: "0d1736c546b245859f112d18",
    liked: true,
    video: "f96740055e4c44a18c3b5759",
    likedBy: "3b6268e253294a43ba01528f",
    __v: 0,
  },
  {
    _id: "bcc51eff7a184475b60fce90",
    liked: true,
    video: "909935c8541d4464a64ba8f8",
    likedBy: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "2dda331fd9804275bd005ce8",
    liked: true,
    video: "8d2b4936677c403188f392e8",
    likedBy: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "5eedf6df01d9437f85f8ed49",
    liked: true,
    video: "d3085bc86d5f489982d08e58",
    likedBy: "7680f4971de249848c9a3361",
    __v: 0,
  },
  {
    _id: "d3aed1cc8706412ba5d93ad3",
    liked: true,
    video: "f96740055e4c44a18c3b5759",
    likedBy: "0e9ffd50bc134b47b26de2e6",
    __v: 0,
  },
  {
    _id: "6b981097863c4c89bf1cc239",
    liked: true,
    video: "8fe92403ad2d4d0a81cf0749",
    likedBy: "a29db25a4a1e41d8b32a3dbb",
    __v: 0,
  },
  {
    _id: "1ec5b15b9ee14823ad1b0b68",
    liked: true,
    video: "909935c8541d4464a64ba8f8",
    likedBy: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "43db97a16ae34d149a0ce121",
    liked: true,
    video: "8d2b4936677c403188f392e8",
    likedBy: "08bf2e83e16f433885992272",
    __v: 0,
  },
  {
    _id: "14cf773f14f04166bb8e32c7",
    liked: true,
    video: "987ead4ef5b74c84a19c77f1",
    likedBy: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "069c75c82df44d7bbfe2f50a",
    liked: true,
    video: "8d2b4936677c403188f392e8",
    likedBy: "3b6268e253294a43ba01528f",
    __v: 0,
  },
  {
    _id: "8ebcee13ebfd42e6898549f8",
    liked: true,
    video: "c2da23d37c5d423ea9f62b96",
    likedBy: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
  {
    _id: "e39c9f9814c049a3aafa5241",
    liked: true,
    video: "211b867bd6b74c2d8aec0003",
    likedBy: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "0bc040f16db944319e451bac",
    liked: true,
    video: "d3085bc86d5f489982d08e58",
    likedBy: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "8c03854835f940da9f35684a",
    liked: true,
    video: "8d2b4936677c403188f392e8",
    likedBy: "4f42a8d5cf65458abe94f7e8",
    __v: 0,
  },
  {
    _id: "e0d671cd38324e92a7d0a667",
    liked: true,
    video: "987ead4ef5b74c84a19c77f1",
    likedBy: "0e9ffd50bc134b47b26de2e6",
    __v: 0,
  },
  {
    _id: "0a45c669abfd4417ad3695a8",
    liked: true,
    video: "909935c8541d4464a64ba8f8",
    likedBy: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
  {
    _id: "a8ef68114e8045b988b4acc6",
    liked: true,
    video: "987ead4ef5b74c84a19c77f1",
    likedBy: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
];
const playlists = [
  {
    _id: "ce8018ecd7164f5595e1a261",
    name: "Playlist 1",
    description: "Description for Playlist 1",
    videos: [
      "987ead4ef5b74c84a19c77f1",
      "211b867bd6b74c2d8aec0003",
      "8fe92403ad2d4d0a81cf0749",
      "f96740055e4c44a18c3b5759",
      "4aad544ce8604e87908e1075",
    ],
    owner: "668b38953119452dbdb6fef9",
    __v: 0,
  },
  {
    _id: "059efd8c8b8d4798937c36d8",
    name: "Playlist 2",
    description: "Description for Playlist 2",
    videos: [
      "d3085bc86d5f489982d08e58",
      "211b867bd6b74c2d8aec0003",
      "4aad544ce8604e87908e1075",
      "58ee9fd9e26e46cfa9ce9916",
      "b631a50c8ce2463580ca8e60",
    ],
    owner: "668b38953119452dbdb6fef9",
    __v: 0,
  },
  {
    _id: "595f5131b170496199f64c29",
    name: "Playlist 3",
    description: "Description for Playlist 3",
    videos: [
      "987ead4ef5b74c84a19c77f1",
      "58ee9fd9e26e46cfa9ce9916",
      "4f23e2268f5245a0978a1e65",
      "211b867bd6b74c2d8aec0003",
      "36290eb31805491889517a12",
    ],
    owner: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "bd181120178247b2bab801fb",
    name: "Playlist 4",
    description: "Description for Playlist 4",
    videos: [
      "4f23e2268f5245a0978a1e65",
      "c2da23d37c5d423ea9f62b96",
      "f96740055e4c44a18c3b5759",
    ],
    owner: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
  {
    _id: "c82af8f2361147b58f160e8b",
    name: "Playlist 5",
    description: "Description for Playlist 5",
    videos: [
      "537b4f2225b2456fa5703c33",
      "8d2b4936677c403188f392e8",
      "b631a50c8ce2463580ca8e60",
      "58ee9fd9e26e46cfa9ce9916",
    ],
    owner: "08bf2e83e16f433885992272",
    __v: 0,
  },
];
const subscriptions = [
  {
    _id: "3206e1496aca46f7a9c1b285",
    subscriber: "3b6268e253294a43ba01528f",
    channel: "937da282a06e4962b5610703",
    __v: 0,
  },
  {
    _id: "10072b1d828342ec95d80529",
    subscriber: "08bf2e83e16f433885992272",
    channel: "937da282a06e4962b5610703",
    __v: 0,
  },
  {
    _id: "b674bb70db9d4177bd7f6f15",
    subscriber: "08bf2e83e16f433885992272",
    channel: "3b6268e253294a43ba01528f",
    __v: 0,
  },
  {
    _id: "599a7270f2d245a29a9419e0",
    subscriber: "0e9ffd50bc134b47b26de2e6",
    channel: "11c56b3ba8f94b748b171482",
    __v: 0,
  },
  {
    _id: "7cb47f1db7ae44059a00d6cb",
    subscriber: "937da282a06e4962b5610703",
    channel: "7680f4971de249848c9a3361",
    __v: 0,
  },
];
const tweets = [
  {
    _id: "bbd6f7bbe5ff41158ebe2c20",
    content: "Tweet 1 from User 1",
    owner: "7680f4971de249848c9a3361",
    __v: 0,
  },
  {
    _id: "6fd9864a7ee1436983355e6c",
    content: "Tweet 2 from User 2",
    owner: "4f42a8d5cf65458abe94f7e8",
    __v: 0,
  },
  {
    _id: "c419b1bce4f14070ad594d41",
    content: "Tweet 3 from User 3",
    owner: "a09ff895910b4848906e0633",
    __v: 0,
  },
  {
    _id: "0b51f4931e5c4b0d92f47152",
    content: "Tweet 4 from User 4",
    owner: "3b6268e253294a43ba01528f",
    __v: 0,
  },
  {
    _id: "c519d64be69c4f78a8596097",
    content: "Tweet 5 from User 5",
    owner: "937da282a06e4962b5610703",
    __v: 0,
  },
];

// Function to Seed Data
const seedDatabase = async () => {
  try {
    console.log("🗑️ Deleting existing records...");
    await User.deleteMany({});
    await Video.deleteMany({});
    await Playlist.deleteMany({});
    await Comment.deleteMany({});
    await Like.deleteMany({});
    await Subscription.deleteMany({});
    await Tweet.deleteMany({});

    console.log("📥 Inserting new data...");
    console.log("👤 Users:", await User.insertMany(users));
    console.log("🎥 Videos:", await Video.insertMany(videos));
    console.log("💬 Comments:", await Comment.insertMany(comments));
    console.log("❤️ Likes:", await Like.insertMany(likes));
    console.log("📂 Playlists:", await Playlist.insertMany(playlists));
    console.log(
      "📢 Subscriptions:",
      await Subscription.insertMany(subscriptions)
    );
    console.log("🐦 Tweets:", await Tweet.insertMany(tweets));

    console.log("✅ Database Seeded Successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("❌ Error Seeding Database:", error);
    mongoose.connection.close();
  }
};

// Run Seeder
seedDatabase();
