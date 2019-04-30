const parties = [
  {name: 'Democratic Party',
  colors: 'Blue',
  founded: '1828'},
  {name: 'Republican Party',
  colors: 'Red',
  founded: '1854'}
]

const tweets = [{
  username: '@Hickenlooper',
  content: 'Touring the @UBCJA_Official training center before #workersforum today. To tackle income inequality, we must partner with labor unions to create the largest expansion of apprenticeships and skills training in our country’s history. #UnionStrong ',
  date_deleted: 'Deleted after 3 minutes at 6:05 PM on 27 Apr.'},
  {username: '@RepDLamborn',
  content: 'This is exciting news! The United State Olympic Museum is scheduled to open in 2020 and will be a state of the art experience for people of all ages! \"Miracle on Ice\" scoreboard will be displayed in Colorado Springs',
  date_deleted: 'Deleted after 7 minutes at 6:40 PM on 25 Apr.'},
  {username: '@RepJoeNeguse',
  content: 'The Trump Administration’s FY2020 budget has utterly failed to meet the challenge of the climate crisis by cutting or eliminating a variety of world-class climate research programs across the federal government, including making funding cuts to @EPA@NSF & @NOAA',
  date_deleted: 'Deleted after 59 seconds at 2:32 PM on 24 Apr.'},
  {username: '@Hickenlooper',
  content: 'It was an honor to have served as Governor at the same time as @Terry_McAuliffe. He\'s a true leader who is committed to bettering his state and the nation. We are lucky to have him in this fight, working tirelessly to turn Virginia completely blue.',
  date_deleted: 'Deleted after 2 minutes at 4:34 AM on 18 Apr.'},
  {username: '@Hickenlooper',
  content: 'It was an honor to have served as Governor at the same time as @Terry_McAuliffe. He\'s a true leader who is committed to bettering his state and the nation. We are lucky to have him in this fight, working tirelessly to turn Virginia completely blue.',
  date_deleted: 'Deleted after 2 minutes at 4:34 AM on 18 Apr.'},
  {username: '@RepJoeNeguse',
  content: 'https://t.co/NYe93lA7KL',
  date_deleted: 'Deleted after 29 seconds at 7:10 AM on 16 Apr.'},
  {username: '@RepJoeNeguse',
  content: 'https://t.co/srYGLK4qAc',
  date_deleted: 'Deleted after 16 seconds at 6:44 AM on 16 Apr.'},
  {username: '@Hickenlooper',
  content: 'One more Kurt Vonnegut memory for tonight: getting roasted by my \"father\" back when I was \"nothing but a mayor\" in 2004.',
  date_deleted: 'Deleted after 1 minute at 3:11 AM on 12 Apr.'},
  {username: '@RepDianaDeGette',
  content: 'Happy #NationalPetDay to my dog, who sometimes thinks he’s a sheep. Either way, I ❤️you, Charlie!',
  date_deleted: 'Deleted after 30 seconds at 1:54 PM on 11 Apr.'},
  {username: '@RepJoeNeguse',
  content: 'RT @RepColinAllred: Congress must stand on the side of the people and #ProtectOurCare. Today, we’ll vote on my resolution calling on t…',
  date_deleted: 'Deleted after 35 seconds at 9:27 AM on 03 Apr.'},
  {username: '@jaredpolis',
  content: 'Thank you @RochelleGalindo for co-sponsoring a bill to find full day kindergarten and increase pay for hardworking Greeley teachers!',
  date_deleted: 'Deleted after 12 minutes at 3:18 AM on 29 Mar.'},
  {username: '@SenCoryGardner',
  content: 'Thank you @ALPA for hosting my daughter Alyson and I yesterday! It was great meeting with pilots and staff to learn more about the incredible campus United provides their pilots here in Denver.',
  date_deleted: 'Deleted after 3 minutes at 7:46 AM on 21 Mar.'},
  {username: '@JasonCrowCO6',
  content: 'RT @StopBigMoney: With his record fighting to fix the broken system, @JasonCrowCO6 had to be one of our first endorsements of the cyc… https://t.co/koZC7uFqQm',
  date_deleted: 'Deleted after 8 seconds at 7:54 PM on 20 Mar.'},
  {username: '@RepJoeNeguse',
  content: 'In @NRDems, we held an oversight hearing on President Trump’s unprecedented rollback of National monuments in Utah #MonumentsForAll',
  date_deleted: 'Deleted after 4 minutes at 1:46 PM on 15 Mar.'},
  {username: '@RepJoeNeguse',
  content: 'RT @LGBTEqCaucus: Today the @LGBTEqCaucus announced our membership for the 116th Congress. With 8 openly LGBT Co-Chairs, 18 Vice Chai… https://t.co/tRGhOx4gFF ',
  date_deleted: 'Deleted after 2 minutes at 5:19 PM on 11 Mar.'},
  {username: '@RepJasonCrow',
  content: 'RT @NARAL: Last year, we turned the House blue. Let’s keep it that way. � We’re already putting our support behind more than…',
  date_deleted: 'Deleted after 24 seconds at 3:50 PM on 08 Mar.'},
  {username: '@RepJoeNeguse',
  content: 'RT @co_divide: Letter from Vail resident thanks @SenatorBennet and @RepJoeNeguse for introducing the #COREAct and urges… https://t.co/r9FUuhSCzG',
  date_deleted: 'Deleted after 11 minutes at 8:44 PM on 05 Mar.'},
  {username: '@RepJoeNeguse',
  content: 'Last week was a breath of fresh air, I was able visit with municipal leaders in Boulder, Larimer, Gilpin, Clear Creek, Summit & Eagle Counties, tour our federal labs, hold two town halls and meet many constituents. Here\'s a quick look at the week: https://t.co/AQqeTJP80i',
  date_deleted: 'Deleted after 1 hour at 11:37 AM on 26 Feb.'},
  {username: '@RepDLamborn',
  content: 'RT @realDonaldTrump: ....This will be remembered as one of the most shocking votes in the history of Congress. If there is one thing we…',
  date_deleted: 'Deleted after 2 minutes at 10:02 AM on 26 Feb.'},
  {username: '@RepDLamborn',
  content: 'Congress must affirm that every life is worth protecting. Real lives are at stake here. I encourage you to call and urge your Senators to support this legislation.',
  date_deleted: 'Deleted after 3 minutes at 7:53 PM on 25 Feb.'},
  {username: '@RepDianaDeGette',
  content: 'Thankful for the court\'s ruling on this important case. But it also serves as a reminder that our fight against draconian restrictions on abortion rights is still far from over – and why it\'s so important that we stay united in our efforts to protect reproductive rights.',
  date_deleted: 'Deleted after 1 minute at 1:02 PM on 08 Feb.'},
]