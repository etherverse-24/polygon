export const NAV_BAR_LINKS = [
  { title: "Home", link: "#hero" },
  { title: "Games", link: "#games" },
  { title: "NFT Pass", link: "/pass" },
  // { title: "Tokenomics", link: "/tokenomics" },
  // { title: "RoadMap", link: "/roadmap" },
  // { title: "Team", link: "/teams" },
];
export const footer_data = {
  Social: [
    {
      heading: "Socials",
      link: "https://twitter.com/MetaDogeUnity",
      title: "Twitter",
    },
    {
      heading: "Resources",
      link: "https://t.me/MetadogeUnity",
      title: "Telegram",
    },
  ],
  Social_head: [
    {
      link: "javaScript:;",
      title: "Docs",
    },
    // {
    //   link: "",
    //   title: "Chart",
    // },
  ],
};
export const latest_games = [
  {
    img: "./fortune_wheel.jpg",
    Game_name: "Fortune Wheel",
    link:"https://fortune-wheel2.vercel.app"
  },
  {
    img: "./slot_machnie.jpg",
    Game_name: "Slot Machnie",
    link:"https://slotmachine-delta.vercel.app/"
  },
  {
    img: "./poker.jpg",
    Game_name: "Poker",
    link:"https://blackwebgl.vercel.app/"
  },
  {
    img: "./real_estate.jpg",
    Game_name: "Real Estate",
    link:"https://realestate-vert-eight.vercel.app"
  },
];
export type GameType = {
  Game_name: string;
  img: string;
  coming_soon?: boolean;
};

export const games = {
  All: [
    {
      Game_name: "Slot Machine",
      img: "./slot_machnie.jpg",
      link:"https://slotmachine-delta.vercel.app/",
      coming_soon: false,
    },
    {
      Game_name: "Poker",
      img: "./poker.jpg",
      link:"https://blackwebgl.vercel.app/",
      coming_soon: false,
    },

    {
      Game_name: "Real Estate",
      img: "./real_estate.jpg",
      link:"https://realestate-vert-eight.vercel.app",
      coming_soon: false,
    },
    {
      Game_name: "Fortune Wheel",
      img: "./fortune_wheel.jpg",
      link:"https://fortune-wheel2.vercel.app",
      coming_soon: false,
    },
    {
      Game_name: "Black Jack",
      img: "./black_jack.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Solitaire",
      img: "./solitaire.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Killer Boy",
      img: "./killer_boy.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Falling Block",
      img: "./faling_block.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Helix",
      img: "./helix.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Carrom",
      img: "./carrom.jpg",
      coming_soon: true,
    },
    {
      Game_name: "flappy Disk",
      img: "./flappy_disk.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Galaxy Battle",
      img: "./galaxy_battle.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Jump dude",
      img: "./jump_dude.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Merge Number",
      img: "./merge_number.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Spin Rush",
      img: "./spin_rush.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Bubble Shooter",
      img: "./bubble_shooter.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Ludo",
      img: "./ludo.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Bird Down",
      img: "./bird_down.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Snake Rush",
      img: "./snake_rush.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Switch Color",
      img: "./switch_color.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Water Sort",
      img: "./water_sort.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Tetris",
      img: "./tetris.jpg",
      coming_soon: true,
    },
  ],
  // New: [
  //   {
  //     Game_name: "Slot Machine",
  //     img: "./slot_machnie.jpg",
  //     coming_soon: false,
  //   },
  //   {
  //     Game_name: "Poker",
  //     img: "./poker.jpg",
  //     coming_soon: false,
  //   },

  //   {
  //     Game_name: "Real Estate",
  //     img: "./real_estate.jpg",
  //     coming_soon: false,
  //   },
  //   {
  //     Game_name: "Fortune Wheel",
  //     img: "./fortune_wheel.jpg",
  //     coming_soon: false,
  //   },
  //   {
  //     Game_name: "Black Jack",
  //     img: "./black_jack.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Solitaire",
  //     img: "./solitaire.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Killer Boy",
  //     img: "./killer_boy.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Falling Block",
  //     img: "./faling_block.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Helix",
  //     img: "./helix.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Carrom",
  //     img: "./carrom.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "flappy Disk",
  //     img: "./flappy_disk.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Galaxy Battle",
  //     img: "./galaxy_battle.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Jump dude",
  //     img: "./jump_dude.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Merge Number",
  //     img: "./merge_number.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Spin Rush",
  //     img: "./spin_rush.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Bubble Shooter",
  //     img: "./bubble_shooter.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Ludo",
  //     img: "./ludo.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Bird Down",
  //     img: "./bird_down.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Snake Rush",
  //     img: "./snake_rush.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Switch Color",
  //     img: "./switch_color.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Water Sort",
  //     img: "./water_sort.jpg",
  //     coming_soon: true,
  //   },
  //   {
  //     Game_name: "Tetris",
  //     img: "./tetris.jpg",
  //     coming_soon: true,
  //   },
  // ],
  Upcoming: [
  
    {
      Game_name: "Black Jack",
      img: "./black_jack.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Solitaire",
      img: "./solitaire.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Killer Boy",
      img: "./killer_boy.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Falling Block",
      img: "./faling_block.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Helix",
      img: "./helix.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Carrom",
      img: "./carrom.jpg",
      coming_soon: true,
    },
    {
      Game_name: "flappy Disk",
      img: "./flappy_disk.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Galaxy Battle",
      img: "./galaxy_battle.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Jump dude",
      img: "./jump_dude.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Merge Number",
      img: "./merge_number.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Spin Rush",
      img: "./spin_rush.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Bubble Shooter",
      img: "./bubble_shooter.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Ludo",
      img: "./ludo.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Bird Down",
      img: "./bird_down.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Snake Rush",
      img: "./snake_rush.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Switch Color",
      img: "./switch_color.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Water Sort",
      img: "./water_sort.jpg",
      coming_soon: true,
    },
    {
      Game_name: "Tetris",
      img: "./tetris.jpg",
      coming_soon: true,
    },
  ],
  Popular: [
    
    {
      img: "./slot_machnie.jpg",
      Game_name: "Slot Machnie",
      link:"https://slotmachine-delta.vercel.app/"
    },
    {
      img: "./poker.jpg",
      Game_name: "Poker",
      link:"https://blackwebgl.vercel.app/"
    },
    {
      img: "./real_estate.jpg",
      Game_name: "Real Estate",
      link:"https://realestate-vert-eight.vercel.app"
    },
    {
      img: "./fortune_wheel.jpg",
      Game_name: "Fortune Wheel",
      link:"https://fortune-wheel2.vercel.app"
    },
  ],
};
