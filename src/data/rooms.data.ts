export const roomsData = [
  {
    id: 1,
    width: 600,
    height: 600,
    type: "main",
    doors: [
      {
        doorId: 2,
        width: 100,
        height: 100,
        x: 260,
        y: 0,
        position: "up",
        nextRoomId: 2,
      },
      {
        doorId: 3,
        width: 100,
        height: 100,
        x: 0,
        y: 260,
        position: "left",
        nextRoomId: 3,
      },
    ],
    collition: {
      default: {
        name: "mapCollection",
        length: 70,
      },
      new: [],
    },
  },
  {
    id: 2,
    width: 700,
    height: 500,
    type: "enemy",
    doors: [
      {
        doorId: 1,
        width: 100,
        height: 100,
        x: 260,
        y: 400,
        position: "down",
        nextRoomId: 1,
      },
    ],
    collition: {
      default: {
        name: "mapCollection",
        length: 70,
      },
      new: [
        {
          type: "enemy",
          enemyId: 1,
        },
        {
          type: "enemy",
          enemyId: 2,
        },
      ],
    },
  },
  {
    id: 3,
    width: 700,
    height: 500,
    type: "main",
    doors: [
      {
        doorId: 1,
        width: 100,
        height: 100,
        x: 600,
        y: 200,
        position: "right",
        nextRoomId: 1,
      },
    ],
    collition: {
      default: {
        name: "mapCollection",
        length: 70,
      },
      new: [],
    },
  },
];
