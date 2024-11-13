export const POSTS = [
  {
    _id: "1",
    text: "Coding is fun",
    img: "/posts/post1.png",
    user: {
      username: "vijayasuriyanv",
      profileImg: "/avatars/boy1.png",
      fullName: "Vijayasuriyan V",
    },
    comments: [
      {
        _id: "1",
        text: "Yeah",
        user: {
          username: "vjs",
          profileImg: "/avatars/girl1.png",
          fullName: "VJS",
        },
      },
    ],
    likes: ["6658s880", "6658s882", "6658s883", "6658s884"],
  },
  {
    _id: "2",
    text: "i luv Coding",
    user: {
      username: "vijayasuriyanv",
      profileImg: "/avatars/boy2.png",
      fullName: "Vijayasuriyan V",
    },
    comments: [
      {
        _id: "1",
        text: "Nice view",
        user: {
          username: "vjs",
          profileImg: "/avatars/boy2.png",
          fullName: "VJS",
        },
      },
    ],
    likes: ["6658s881", "6658s882", "6658s883", "6658s884"],
  },
  {
    _id: "3",
    text: "WoW see the sky",
    img: "/posts/post2.png",
    user: {
      username: "vijayasuriyanv",
      profileImg: "/avatars/boy3.png",
      fullName: "Vijayasuriyan V",
    },
    comments: [],
    likes: ["6658s881", "6658s882", "6658s883", "6658s884", "6658s895", "6658s896"],
  },
  {
    _id: "4",
    text: "Sun behind Horse looks drasatic",
    img: "/posts/post3.png",
    user: {
      username: "vijayasuriyanv",
      profileImg: "/avatars/boy3.png",
      fullName: "Vijayasuriyan V",
    },
    comments: [
      {
        _id: "1",
        text: "Cinematic view",
        user: {
          username: "vjs",
          profileImg: "/avatars/boy3.png",
          fullName: "VJS",
        },
      },
    ],
    likes: [
      "6658s681",
      "6658s682",
      "6658s683",
      "6658s684",
      "6658s685",
      "6658s686",
      "6658s687",
      "6658s688",
      "6658s689",
    ],
  },
];

export const USERS_FOR_RIGHT_PANEL = [
  {
    _id: "1",
    fullName: "Vijayasuriyan V",
    username: "vijayasuriyanv",
    profileImg: "/avatars/boy2.png",
  },
  {
    _id: "2",
    fullName: "VJS",
    username: "vjs",
    profileImg: "/avatars/boy2.png",
  },
  {
    _id: "3",
    fullName: "Anon",
    username: "anon",
    profileImg: "/avatars/boy3.png",
  },
  {
    _id: "4",
    fullName: "anonymous me",
    username: "anonymous",
    profileImg: "/avatars/boy1.png",
  },
];
