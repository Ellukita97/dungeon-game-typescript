export const roomsData = [
  {
    id: 1,
    width: 600,
    height: 600,
    type: "main",
    doors: [
      {
        doorId: 1,
        playerSpawn: {
          x: 245,
          y: 60,
        },
        width: 100,
        height: 100,
        x: 260,
        y: 0,
        position: "up",
        nextDoorId: 3,
        nextRoomId: 2,
      },
      {
        doorId: 2,
        playerSpawn: {
          x: 80,
          y: 260,
        },
        width: 100,
        height: 100,
        x: 0,
        y: 260,
        position: "left",
        nextDoorId: 4,
        nextRoomId: 3,
      },
    ],
    gameObectRoom: [],
  },
  {
    id: 2,
    width: 700,
    height: 500,
    type: "enemy",
    doors: [
      {
        doorId: 3,
        playerSpawn: {
          x: 240,
          y: 290,
        },
        width: 100,
        height: 100,
        x: 260,
        y: 400,
        position: "down",
        nextDoorId: 1,
        nextRoomId: 1,
      },
    ],
    gameObectRoom: [
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
  {
    id: 3,
    width: 700,
    height: 500,
    type: "main",
    doors: [
      {
        doorId: 4,
        playerSpawn: {
          x: 480,
          y: 200,
        },
        width: 100,
        height: 100,
        x: 600,
        y: 200,
        position: "right",
        nextDoorId: 2,
        nextRoomId: 1,
      },
    ],
    gameObectRoom: [],
  },
];
