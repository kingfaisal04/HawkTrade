export const foundationCourses = [
  {
    id: 'found_1',
    title: 'Market Fundamentals',
    description: 'What is Forex, and what moves price?',
    duration: '20 min',
    xp: 50,
    videoId: 'M7lc1UVf-VE',
    notes: `## Concept Definition
Forex (Foreign Exchange) is the global decentralized market for trading currencies. It determines the relative values of different currencies and operates 24 hours a day, 5 days a week.

## Why it Matters
Unlike the stock market, Forex is truly global and massive, processing trillions of dollars daily. This high liquidity means you can enter and exit trades instantly, but it also means massive institutional players (central banks, hedge funds) dominate the landscape.

## How it Affects Price
Price is driven by macroeconomic factors: interest rates, inflation, geopolitical stability, and massive institutional order flow. When demand for a currency increases relative to another, the exchange rate rises.

## Common Mistakes
New traders treat Forex like crypto—expecting massive moonshots. Forex moves in tiny fractions (pips) and requires leverage to make significant returns, which amplifies risk.

## Real Market Application
When you trade EUR/USD, you are buying the Euro and simultaneously selling the US Dollar. If the US Federal Reserve raises interest rates, the USD typically strengthens, driving the EUR/USD chart downwards.`,
    quiz: {
      question: 'Which of the following entities is the primary driver of massive price movements in the Forex market?',
      options: ['Retail day traders', 'Central Banks and large financial institutions', 'Cryptocurrency miners'],
      answerIndex: 1
    },
    aiSummary: {
      concept: 'The true nature of the Foreign Exchange Market.',
      signatures: ['Forex is a decentralized OTC market.', 'Traded in pairs (Base vs Quote).', 'Driven by institutional order flow.'],
      backtestPrompt: 'Open EURUSD on a Daily chart. Notice how smooth the trends are compared to crypto markets.'
    }
  },
  {
    id: 'found_2',
    title: 'Pips, Lots, and Spread',
    description: 'The mathematics of Forex trading.',
    duration: '25 min',
    xp: 50,
    videoId: 'M7lc1UVf-VE',
    notes: `## Concept Definition
- **Pip (Percentage in Point):** The smallest price move in a currency pair, typically the 4th decimal place (e.g., 1.1050 to 1.1051 is 1 pip).
- **Lot:** The standardized quantity of currency you trade. A Standard Lot is 100,000 units. A Mini Lot is 10,000. A Micro Lot is 1,000.
- **Spread:** The difference between the Bid (selling price) and the Ask (buying price).

## Why it Matters
If you don't understand how to calculate the monetary value of a pip based on your lot size, you cannot manage risk. 

## Practical Example
If you trade 1 Standard Lot (100,000 units) on EUR/USD, each pip movement is worth $10. If your stop loss is 20 pips away, your monetary risk is $200.

## Common Mistakes
Trading a lot size that is too large for the account size because the trader did not calculate the pip value relative to their Stop Loss distance.`,
    quiz: {
      question: 'If you are trading 1 Standard Lot of EUR/USD and the price moves 10 pips against you, what is your floating loss?',
      options: ['$10', '$100', '$1,000'],
      answerIndex: 1
    },
    aiSummary: {
      concept: 'Calculating position sizes mathematically.',
      signatures: ['1 Standard Lot = $10/pip (roughly)', 'Spread is the cost of doing business', 'Always calculate risk before entering'],
      backtestPrompt: 'Calculate your exact lot size if you want to risk $50 on a 15-pip stop loss.'
    }
  },
  {
    id: 'found_3',
    title: 'Trading Sessions & Volatility',
    description: 'London, New York, and Asian sessions.',
    duration: '20 min',
    xp: 50,
    videoId: 'M7lc1UVf-VE',
    notes: `## Concept Definition
The Forex market operates continuously, but volatility peaks during specific regional business hours:
- **Asian Session (Tokyo/Sydney):** Typically low volatility, tight consolidation ranges.
- **London Session:** Extremely high volume. Often establishes the true daily trend or the high/low of the day.
- **New York Session:** Massive volume, especially during the overlap with London (8 AM - 12 PM EST). 

## Why it Matters
Time is just as important as price. A perfect technical setup during the dead Asian session is likely to fail or chop around. The same setup during the NY Open has the volume to explode to your take profit.

## Common Mistakes
Overtrading during lunch hours (12 PM - 1 PM EST) or during the late Asian session when algorithms are simply accumulating positions within a tight range.`,
    quiz: {
      question: 'During which time window is market volatility and volume typically the highest?',
      options: ['The Tokyo Open', 'The London and New York overlap (8 AM - 12 PM EST)', 'Friday afternoon right before market close'],
      answerIndex: 1
    },
    aiSummary: {
      concept: 'Time of day dictates market behavior.',
      signatures: ['Asian = Consolidation', 'London = Expansion / Fakeouts', 'New York = Continuation or Reversal'],
      backtestPrompt: 'Draw vertical lines on your chart marking 3 AM EST (London) and 8 AM EST (NY).'
    }
  },
  {
    id: 'found_4',
    title: 'Candlestick Theory',
    description: 'Reading the tape through OHLC bars.',
    duration: '30 min',
    xp: 75,
    videoId: 'M7lc1UVf-VE',
    notes: `## Concept Definition
A Japanese Candlestick visually represents price action over a specific timeframe. It shows the Open, High, Low, and Close (OHLC).
- **Body:** Shows the net price movement from open to close.
- **Wick (Shadow):** Shows the extreme high and low reached during that timeframe, indicating rejection.

## Momentum vs Rejection
- A massive full-bodied green candle indicates strong bullish displacement.
- A candle with a tiny body but a massive upper wick (pin bar/shooting star) indicates buyers tried to push price up, but were aggressively rejected by sellers.

## How it Affects Price
Candles tell a story of buyers vs sellers. An engulfing candle shows a complete shift in power. Successive large bodies show trend strength.

## Common Mistakes
Trading candlestick patterns in isolation. A bullish engulfing candle in the middle of nowhere means nothing. A bullish engulfing candle at a major daily support level is a high-probability signal.`,
    quiz: {
      question: 'What does a candlestick with a very long lower wick and a small body near the top indicate?',
      options: ['Strong bearish momentum', 'Sellers tried to push price down but buyers aggressively rejected it', 'The market is about to close'],
      answerIndex: 1
    },
    aiSummary: {
      concept: 'Reading the narrative of price action.',
      signatures: ['Wicks equal rejection', 'Large bodies equal displacement and intent', 'Context matters more than the pattern'],
      backtestPrompt: 'Find 5 examples of a long-wick rejection candle occurring exactly at a key support level.'
    }
  },
  {
    id: 'found_5',
    title: 'Market Structure',
    description: 'The foundation of all technical analysis.',
    duration: '35 min',
    xp: 75,
    videoId: 'M7lc1UVf-VE',
    notes: `## Concept Definition
Market Structure is the definition of the current trend using swing highs and swing lows.
- **Uptrend:** Price makes Higher Highs (HH) and Higher Lows (HL).
- **Downtrend:** Price makes Lower Highs (LH) and Lower Lows (LL).
- **Consolidation:** Price moves sideways without breaking significant highs or lows.

## BOS and CHoCH
- **Break of Structure (BOS):** When price breaks a previous high in an uptrend, confirming continuation.
- **Change of Character (CHoCH):** When price breaks the last Higher Low in an uptrend, indicating a potential reversal to a downtrend.

## Why it Matters
Trading against the higher timeframe market structure is the primary reason beginners lose money. "The trend is your friend" is a cliché because it is mathematically true.

## Common Mistakes
Drawing structure on the 1-minute chart and ignoring the 4-hour chart. Lower timeframe structure is noise; higher timeframe structure is law.`,
    quiz: {
      question: 'What defines a confirmed uptrend?',
      options: ['Successive Higher Highs and Higher Lows', 'Price moving aggressively upwards in a straight line', 'Equal Highs and Equal Lows'],
      answerIndex: 0
    },
    aiSummary: {
      concept: 'Identifying the true direction of the market.',
      signatures: ['Uptrends: HHs and HLs', 'Downtrends: LHs and LLs', 'CHoCH signals a reversal'],
      backtestPrompt: 'Go to a 4H chart and label the last 10 swing points as HH, HL, LH, or LL.'
    }
  },
  {
    id: 'found_6',
    title: 'Support and Resistance Basics',
    description: 'Horizontal levels and zone flipping.',
    duration: '25 min',
    xp: 50,
    videoId: 'M7lc1UVf-VE',
    notes: `## Concept Definition
- **Support:** A price level where a downtrend tends to pause due to a concentration of demand (buying interest).
- **Resistance:** A price level where an uptrend tends to pause due to a concentration of supply (selling interest).

## Break and Retest (Zone Flipping)
A fundamental law of price action: Broken resistance often becomes new support. Broken support often becomes new resistance.

## How to Identify on Charts
Look for areas where price has violently rejected multiple times. Do not draw thin lines; draw rectangular zones, as institutional algorithms buy in blocks, not at exact single pip numbers.

## Common Mistakes
Entering a trade immediately when price touches a zone. You must wait for confirmation (a rejection candle or lower timeframe structure shift) before entering.`,
    quiz: {
      question: 'What is the "Break and Retest" phenomenon?',
      options: ['When price breaks a trendline and immediately reverses to the origin', 'When a broken resistance level acts as new support upon price returning to it', 'When your stop loss is broken and tested'],
      answerIndex: 1
    },
    aiSummary: {
      concept: 'Identifying institutional floors and ceilings.',
      signatures: ['Draw zones, not lines', 'Look for multiple rejections', 'Broken ceilings become new floors'],
      backtestPrompt: 'Identify a major resistance level on the Daily chart that broke, and then acted as support on the retest.'
    }
  },
  {
    id: 'found_7',
    title: 'Risk Management',
    description: 'The mathematics of survival.',
    duration: '40 min',
    xp: 100,
    videoId: 'M7lc1UVf-VE',
    notes: `## Concept Definition
Risk Management is the process of protecting your trading capital from devastating losses. It is the single most important skill in trading.

## The 1% Rule
Professional traders rarely risk more than 1% to 2% of their total account capital on a single trade. If you have a $10,000 account, your maximum loss on a trade should be $100.

## Risk-to-Reward Ratio (R:R)
This is the amount of risk taken compared to the potential reward.
If you risk $100 to make $200, your R:R is 1:2.
With a 1:2 R:R, you only need to be right 34% of the time to break even.

## Common Mistakes
Moving your stop loss wider because you "hope" the trade will turn around. This invalidates your mathematical edge and leads to blown accounts.`,
    quiz: {
      question: 'If you have a 1:3 Risk-to-Reward average, what win rate do you need to remain profitable?',
      options: ['Over 70%', 'Exactly 50%', 'Anything above 25%'],
      answerIndex: 2
    },
    aiSummary: {
      concept: 'Protecting capital mathematically.',
      signatures: ['Never risk more than 1-2%', 'Always use a hard Stop Loss', 'Aim for asymmetric R:R (1:2 or better)'],
      backtestPrompt: 'Execute 10 trades risking exactly 1% with a 1:2 RR. Note how drawdowns are easily survivable.'
    }
  },
  {
    id: 'found_8',
    title: 'Trading Psychology',
    description: 'Mastering the mind.',
    duration: '45 min',
    xp: 100,
    videoId: 'M7lc1UVf-VE',
    notes: `## Concept Definition
Trading psychology refers to the emotional aspects that dictate a trader's decisions. The market does not cause you to lose money; your reaction to the market causes you to lose money.

## The Big Demons
- **FOMO (Fear Of Missing Out):** Buying the absolute top of a massive green candle because you feel left out.
- **Revenge Trading:** Instantly taking a high-risk trade after a loss because you are angry and want to "make it back."
- **Greed:** Refusing to take profits at your designated target, hoping for more, only to watch it reverse to breakeven.

## Why it Matters
You can have a strategy with an 80% win rate, but if you lack discipline, you will blow your account on the 20% of losing trades by over-leveraging and moving stop losses.

## Real Market Application
Professional trading is boring. It is the relentless execution of a statistical edge. Accept the risk before you click buy. Once the trade is active, it is out of your control.`,
    quiz: {
      question: 'Which of the following is an example of Revenge Trading?',
      options: ['Waiting patiently for your setup after a loss', 'Doubling your lot size immediately after a loss to make the money back quickly', 'Closing the terminal for the day after hitting your max loss limit'],
      answerIndex: 1
    },
    aiSummary: {
      concept: 'Mastering emotional discipline.',
      signatures: ['Accept the loss before entering', 'Trading should feel boring, not thrilling', 'Follow the plan relentlessly'],
      backtestPrompt: 'Journal a session where you took a loss, and note your emotional urge to revenge trade.'
    }
  },
  {
    id: 'found_9',
    title: 'Liquidity Basics',
    description: 'Where the money rests.',
    duration: '35 min',
    xp: 75,
    videoId: 'M7lc1UVf-VE',
    notes: `## Concept Definition
Liquidity refers to areas on the chart where massive amounts of pending orders reside. 
- **Buy Stop Liquidity:** Rests above old highs. Retail traders place stop-losses for their short positions here. Breakout traders place buy-entry orders here.
- **Sell Stop Liquidity:** Rests below old lows. Retail traders place stop-losses for their long positions here.

## How it Affects Price
Large financial institutions need massive liquidity to fill their enormous orders without causing extreme slippage. Therefore, the algorithmic market delivery constantly seeks out these liquidity pools. Price is drawn to old highs and lows like a magnet.

## Common Mistakes
Buying a "breakout" just as price crosses an old high, only to get trapped as institutions use your buy order to fill their short positions (a liquidity sweep).`,
    quiz: {
      question: 'Why do institutional algorithms push price above old swing highs?',
      options: ['Because they want to help retail breakout traders make money', 'To trigger retail buy-stops, which provides the liquidity needed for institutions to sell', 'Because price only moves upwards'],
      answerIndex: 1
    },
    aiSummary: {
      concept: 'Understanding the magnetic draw of liquidity.',
      signatures: ['Old highs = Buy Stops', 'Old lows = Sell Stops', 'Equal highs/lows are high-probability targets'],
      backtestPrompt: 'Identify a "Double Top" and watch how price eventually sweeps above it before reversing.'
    }
  }
]

export const methodologies = [
  {
    id: 'meth_ict',
    title: 'ICT Concepts',
    description: 'The Inner Circle Trader (Michael J. Huddleston): Smart Money Concepts, algorithmic price delivery, and institutional time & price theory.',
    totalModules: 15,
    categoryBadge: 'SMC',
    courses: [
      {
        id: 'ict_beg',
        title: 'Beginner ICT',
        level: 'Beginner',
        lessons: [
          {
            id: 'ict_beg_1',
            title: 'Market Structure & BSL/SSL',
            duration: '50:00',
            xp: 100,
            videoId: 'sM64QZOf_tE',
            notes: `## Concept Definition
ICT defines market structure not just by swings, but by the intent to engineer liquidity. 
- **Buy Stop Liquidity (BSL):** Resting orders above swing highs.
- **Sell Stop Liquidity (SSL):** Resting orders below swing lows.

## Why it Matters
The market is not random. It is in a continuous state of moving from a period of consolidation to a period of expansion, seeking out liquidity. If you don't know where the liquidity is, you *are* the liquidity.

## Chart Application
When price is in an uptrend, the algorithm is intentionally leaving relative equal lows intact (building SSL) while taking out BSL to entice retail buyers. Eventually, it will reverse to purge that engineered SSL.`,
            quiz: {
              question: 'According to ICT, what resides below an old swing low?',
              options: ['Fair Value Gaps', 'Sell Stop Liquidity (SSL)', 'Premium Pricing'],
              answerIndex: 1
            },
            aiSummary: {
              concept: 'Algorithmic liquidity targeting.',
              signatures: ['BSL rests above highs', 'SSL rests below lows', 'Algorithms engineer liquidity to sweep it later'],
              backtestPrompt: 'Mark out the Daily BSL and SSL on EURUSD and observe how price reacts when it crosses them.'
            }
          },
          {
            id: 'ict_beg_2',
            title: 'Fair Value Gaps (FVG)',
            duration: '55:00',
            xp: 100,
            videoId: 'r5D4aR7_8V4',
            notes: `## Concept Definition
A Fair Value Gap (FVG) is a specific 3-candle formation that represents an imbalance in price delivery. 
- In a Bullish FVG, the high of Candle 1 and the low of Candle 3 do not overlap. The space between them is a gap where only buying occurred.

## Why it Matters
The algorithm is designed to offer fair value to both buyers and sellers. When an imbalance occurs, price has a high probability of returning to that gap to "fill" or "re-balance" it before continuing the trend.

## Common Mistakes
Trading every single FVG you see. You must only trade FVGs that align with the higher timeframe narrative and occur during specific Killzones.`,
            quiz: {
              question: 'A Bearish Fair Value Gap is formed when there is empty space between:',
              options: ['The low of candle 1 and the high of candle 3', 'The open and close of candle 2', 'The wicks of adjacent candles'],
              answerIndex: 0
            },
            aiSummary: {
              concept: 'Price Imbalances (FVG)',
              signatures: ['3-candle pattern', 'No overlap between wick 1 and wick 3', 'Acts as a magnetic draw for future price'],
              backtestPrompt: 'Find a massive displacement candle on the 1H chart and mark the resulting FVG.'
            }
          },
          {
            id: 'ict_beg_3',
            title: 'Order Blocks (OB)',
            duration: '60:00',
            xp: 100,
            videoId: 'm3dYj0yP_3U',
            notes: `## Concept Definition
An Order Block is a change in the state of delivery. 
- A **Bullish Order Block** is the last down-close candle before an explosive up move that breaks market structure. 
- It represents the footprint of institutional accumulation.

## Validation
An OB is only valid if it is followed by displacement (a strong move leaving an FVG). The most sensitive part of the OB is its Open price and its Mean Threshold (50% level of the candle body).

## Chart Application
When price returns to a Bullish OB, you want to see a violent rejection off the open or the 50% mark, confirming institutions are protecting their accumulated positions.`,
            quiz: {
              question: 'What is the most sensitive level of an Order Block that price should ideally not close beyond?',
              options: ['The wick extreme', 'The Mean Threshold (50% of the body)', 'The opening price'],
              answerIndex: 1
            },
            aiSummary: {
              concept: 'Institutional Footprints (Order Blocks)',
              signatures: ['Last opposite candle before displacement', 'Must break structure', 'Respects the 50% Mean Threshold'],
              backtestPrompt: 'Identify a Daily Bullish Order Block. Drop to the 15m chart and watch price react to the Mean Threshold.'
            }
          },
          {
            id: 'ict_beg_4',
            title: 'Premium and Discount Arrays',
            duration: '45:00',
            xp: 100,
            videoId: 'r5D4aR7_8V4',
            notes: `## Concept Definition
The algorithm prices assets in terms of Premium (expensive) and Discount (cheap). 
Using a Fibonacci retracement tool from a Swing High to a Swing Low:
- **Above 50% (Equilibrium) = Premium.** You only look for Shorts here.
- **Below 50% (Equilibrium) = Discount.** You only look for Longs here.

## Why it Matters
Institutions do not buy at a premium. They accumulate at a discount. If you are buying in a premium, you are providing liquidity for smart money to sell to you.

## Practical Example
If you identify a Bullish Order Block, but it is located in the Premium half of the dealing range, it is low probability. You want to see price drop into the Discount half to mitigate an Order Block.`,
            quiz: {
              question: 'If you want to enter a Long position, where should your PD Array (Order Block/FVG) be located?',
              options: ['In the Premium zone', 'Exactly at Equilibrium', 'In the Discount zone'],
              answerIndex: 2
            },
            aiSummary: {
              concept: 'Premium and Discount Pricing',
              signatures: ['Draw Fib from Swing High to Swing Low', 'Buy in Discount (<50%)', 'Sell in Premium (>50%)'],
              backtestPrompt: 'Pull a Fib on the current Weekly dealing range. Are we currently in Premium or Discount?'
            }
          }
        ]
      },
      {
        id: 'ict_int',
        title: 'Intermediate ICT',
        level: 'Intermediate',
        lessons: [
          {
            id: 'ict_int_1',
            title: 'SMT Divergence',
            duration: '50:00',
            xp: 150,
            videoId: 'M7lc1UVf-VE',
            notes: `## Concept Definition
Smart Money Tool (SMT) Divergence is a crack in correlation between closely tied assets.
For example, EURUSD and GBPUSD usually move together. If EURUSD makes a Higher High, but GBPUSD makes a Lower High, that is SMT Divergence.

## Why it Matters
It reveals algorithmic accumulation or distribution. If the US Dollar Index (DXY) makes a higher high, but EURUSD fails to make a lower low, EURUSD is showing underlying institutional strength.

## Chart Application
Use TradingView's compare tool. When price reaches a major liquidity pool, look for SMT between NQ and ES, or EURUSD and GBPUSD, to confirm the reversal.`,
            quiz: {
              question: 'What does SMT Divergence between closely correlated assets indicate?',
              options: ['A glitch in the data feed', 'A sign of algorithmic accumulation or distribution', 'That correlation no longer exists'],
              answerIndex: 1
            },
            aiSummary: {
              concept: 'Smart Money Tool (SMT) Divergence',
              signatures: ['Correlated assets fail to confirm highs/lows', 'Shows underlying institutional strength/weakness'],
              backtestPrompt: 'Overlay ES on your NQ chart and find an SMT divergence at a major swing low.'
            }
          },
          {
            id: 'ict_int_2',
            title: 'ICT Killzones',
            duration: '45:00',
            xp: 150,
            videoId: 'M7lc1UVf-VE',
            notes: `## Concept Definition
Killzones are specific times of day where the algorithmic delivery of price is most volatile and predictable, creating high-probability setups.
- **Asian Killzone:** 8:00 PM – 12:00 AM EST
- **London Killzone:** 2:00 AM – 5:00 AM EST
- **New York Killzone:** 7:00 AM – 10:00 AM EST

## Why it Matters
ICT concepts rely heavily on Time & Price. A setup forming outside of a Killzone is heavily discounted. The London Killzone typically creates the High or Low of the day.

## Practical Example
Look for price to sweep Asian session liquidity during the London Killzone, form a Market Structure Shift, and leave an FVG for entry.`,
            quiz: {
              question: 'Which Killzone is historically known for creating the true High or Low of the day?',
              options: ['Asian Killzone', 'London Killzone', 'New York Killzone'],
              answerIndex: 1
            },
            aiSummary: {
              concept: 'Time & Price (Killzones)',
              signatures: ['Trade only during specific windows', 'London creates HOD/LOD', 'NY overlaps and expands'],
              backtestPrompt: 'Highlight the 2AM-5AM EST window on a 15m chart for 10 days. Observe the price action inside it.'
            }
          }
        ]
      },
      {
        id: 'ict_adv',
        title: 'Advanced ICT',
        level: 'Advanced',
        lessons: [
          {
            id: 'ict_adv_1',
            title: 'AMD (Accumulation, Manipulation, Distribution)',
            duration: '65:00',
            xp: 200,
            videoId: 'M7lc1UVf-VE',
            notes: `## Concept Definition
The Power of 3 (AMD) is the algorithmic template for a daily candle.
1. **Accumulation:** Smart money builds positions near the opening price (usually during the Asian session).
2. **Manipulation (The Judas Swing):** Price moves violently against the true daily direction to trap retail traders and grab liquidity (usually London open).
3. **Distribution:** Price moves aggressively in the true intended direction (NY session), expanding the daily candle body.

## How to Identify
If the daily bias is Bullish, you expect price to open, drop below the open price (Manipulation) to hit discount arrays, and then rally to close near the high of the day (Distribution).`,
            quiz: {
              question: 'In a bullish AMD profile, what does the Manipulation phase do?',
              options: ['Drops below the opening price to grab sell-side liquidity', 'Rallies aggressively to the profit target', 'Consolidates tightly all day'],
              answerIndex: 0
            },
            aiSummary: {
              concept: 'The Power of 3 (AMD)',
              signatures: ['Asian Accumulation', 'London Manipulation (Judas Swing)', 'New York Distribution'],
              backtestPrompt: 'Look at a Daily Bullish candle. Drop to the 1H timeframe and map out the A-M-D phases of that specific day.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'meth_wyckoff',
    title: 'Wyckoff Methodology',
    description: 'Richard D. Wyckoff: Accumulation, Distribution, and the Composite Man.',
    totalModules: 5,
    categoryBadge: 'Price Action',
    courses: [
      {
        id: 'wyc_beg',
        title: 'Wyckoff Fundamentals',
        level: 'Beginner',
        lessons: [
          {
            id: 'wyc_beg_1',
            title: 'The Composite Man',
            duration: '35:00',
            xp: 100,
            videoId: 'M7lc1UVf-VE',
            notes: `## Concept Definition
Wyckoff proposed a heuristic: imagine that all institutional operators in the market are actually a single entity—the "Composite Man."
The Composite Man carefully plans, executes, and concludes his campaigns. He buys when the public is panicking (Accumulation) and sells when the public is euphoric (Distribution).

## Why it Matters
If you trade in harmony with the Composite Man, you will be profitable. If you do not understand his motives, you will be his liquidity.`,
            quiz: {
              question: 'What does the Composite Man do during a period of market panic and heavy retail selling?',
              options: ['He also sells', 'He quietly accumulates (buys) positions at discount prices', 'He closes the market'],
              answerIndex: 1
            },
            aiSummary: {
              concept: 'The Composite Man',
              signatures: ['Institutions act collectively', 'They accumulate in panic', 'They distribute in euphoria'],
              backtestPrompt: 'Look at the 2020 COVID crash on the S&P 500 and identify where the Composite Man accumulated.'
            }
          },
          {
            id: 'wyc_beg_2',
            title: 'Phases of Accumulation',
            duration: '55:00',
            xp: 150,
            videoId: 'M7lc1UVf-VE',
            notes: `## Concept Definition
Accumulation is the process by which smart money buys a large amount of an asset without causing the price to rise drastically.
- **Phase A (Stopping the downtrend):** Preliminary Support (PS) and Selling Climax (SC).
- **Phase B (Building the cause):** Choppy sideways action. Institutions absorb all available supply.
- **Phase C (The Test/Spring):** A fake breakdown below the trading range to shake out weak hands and grab the final liquidity.
- **Phase D (Sign of Strength - SOS):** Price breaks back into the range and pushes up.

## Practical Application
The "Spring" (Phase C) is the most critical and lucrative entry point in the Wyckoff methodology. It looks like a massive breakdown, but immediately reverses.`,
            quiz: {
              question: 'Which Wyckoff phase involves a fake breakdown (The Spring) to grab final liquidity?',
              options: ['Phase A', 'Phase B', 'Phase C'],
              answerIndex: 2
            },
            aiSummary: {
              concept: 'Wyckoff Accumulation Schematic',
              signatures: ['SC and AR form the range', 'Phase B builds the cause', 'Phase C Spring grabs liquidity'],
              backtestPrompt: 'Find a textbook Wyckoff Accumulation schematic on the 4H chart of Gold.'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'meth_orderflow',
    title: 'Order Flow Trading',
    description: 'Track the actual transactions of institutional footprints using DOM, Footprint charts, and Volume Profile.',
    totalModules: 6,
    categoryBadge: 'Order Flow',
    courses: [
      {
        id: 'of_beg',
        title: 'Order Flow Foundations',
        level: 'Beginner',
        lessons: [
          {
            id: 'of_beg_1',
            title: 'Volume Profile Basics',
            duration: '40:00',
            xp: 100,
            videoId: 'M7lc1UVf-VE',
            notes: `## Concept Definition
- **Volume Profile:** An advanced charting study that displays trading activity over a specified time period at specified price levels.
- **Value Area (VA):** The price range in which a specified percentage (usually 70%) of all volume was traded during the time period.
- **Point of Control (POC):** The price level for the time period with the highest traded volume.

## Practical Application
Price tends to gravitate towards high-volume nodes (POC) because that is where liquidity exists. Conversely, price moves rapidly through low-volume nodes (LVN) due to a lack of friction/liquidity.`,
            quiz: {
              question: 'What does the Point of Control (POC) represent on a Volume Profile?',
              options: ['The highest price of the day', 'The price level where the highest volume was traded', 'The exact middle of the daily range'],
              answerIndex: 1
            },
            aiSummary: {
              concept: 'Volume Profile and Value Areas',
              signatures: ['High Volume Nodes (HVN) act as magnets', 'Low Volume Nodes (LVN) act as vacuum zones', 'The POC is the strongest anchor'],
              backtestPrompt: "Apply a Volume Profile to the previous daily session. Observe how today's price reacts when it touches yesterday's POC."
            }
          }
        ]
      }
    ]
  }
]
