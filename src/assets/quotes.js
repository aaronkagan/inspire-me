const quotes = [
  "If I know what love is, it is because of you. - Herman Hesse",
  "The time is always right to do what is right. - Martin Luther King, Jr",
  "You've got to bumble forward into the unknown. - Frank Gehry",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "When the going gets tough the tough get going. - Joseph P. Kennedy",
  "Sports do not build character. They reveal it. - Heywood Broun",
  "Action is the foundational key to all success. - Pablo Picasso",
  "Don't wait. The time will never be just right. - Napoleon Hill",
  "Creativity means believing you have greatness. - Wayne Dyer",
  "All of us can create if we allow ourselves to. - Natalie Goldberg",
  "People only see what they are prepared to see. - Ralph Waldo Emerson",
  "Only through suffering can we find ourselves. - Fyodor Dostoevsky",
  "The universe is made up of stories, not atoms. - Muriel Rukeyser",
  "People empty me. I have to get away to refill. - Charles Bukowski",
  "Love is an ideal thing, marriage a real thing. - Goethe",
  "Every thought we think is creating our future. - Louise Hay",
  "Don't wait. The time will never be just right. - Napoleon Hill",
  "The time you enjoy wasting is not wasted time. - Bertrand Russell",
  "Everything is a once in a lifetime experience. - Kobi Yamada",
  "What is true stillness? Stillness in movement. - Bruce Lee",
  "He who would travel happily must travel light. - Antoine de Saint-Exupery",
  "I cured with the power that came through me. - Black Elk",
  "The secret of getting ahead is getting started. - Mark Twain",
  "Change your thoughts and you change your world. - Norman Vincent Peale",
  "There are no traffic jams along the extra mile. - Roger Staubach",
  "Champions keep playing until they get it right. - Billie Jean King",
  "Do what you must, And your friends will adjust. - Robert Brault",
  "Mirrors lie. They don't show you what's inside. - Anonymous",
  "Ignorance, the root and the stem of every evil. - Plato",
  "Compassion is the chief law of human existence. - Fyodor Dostoyevsky",
  "Search for contentment in each person you meet. - Steve Maraboli",
  "Almost all creativity involves purposeful play. - Abraham Maslow",
  "I love you. You are beautiful. Please forgive me. - H. Jackson Brown Jr.",
  "An apology is a good way to have the last word. - Anonymous",
  "To seek is to suffer. To seek nothing is bliss. - Bodhidharma",
  "Desire increases when fulfillment is postponed. - Pierre Corneille",
  "There is no cosmetic for beauty like happiness. - Maria Mitchell",
  "If you are to advance, all fixed ideas must go. - Joseph Campbell",
  "Solitude has its own very strange beauty to it. - Liv Tyler",
  "Art starts alone - and convinces society later. - Douglas Davis",
  "You are the only one that creates your reality. - Rhonda Byrne",
  "I can live for two months on a good compliment. - Mark Twain",
  "Let the beauty of what you love be what you do. - Rumi",
  "Silent gratitude isn't very much use to anyone. - Gertrude Stein",
  "Trust yourself, you will start to trust others. - Santosh Kalwar",
  "Seek out a tree and let it teach you stillness. - Eckhart Tolle",
  "Nobody can give you wiser advice than yourself. - Cicero",
  "For the raindrop, joy is in entering the river. - Mirza Ghalib",
  "Courage is the power to let go of the familiar. - Raymond Lindquist",
  "To hold, you must first open your hand. Let go. - Lao Tzu",
  "Winning isn't everything, but wanting to win is. - Vince Lombardi",
  "There are no shortcuts to any place worth going. - Anonymous",
  "My favorite things in life don't cost any money. - Steve Jobs",
  "When life comes at you, come back twice as hard. - Anonymous",
  "Today is the first day of the rest of your life. - Anonymous",
  "Music is the wine that fills the cup of silence. - Robert Fripp",
  "Live today, for tomorrow it will all be history. - Anonymous",
  "I love those random memories that make me smile. - Anonymous",
  "Seek first to understand, then to be understood. - Stephen R. Covey",
  "He that can have patience can have what he will. - Benjamin Franklin",
  "To live in hearts we leave behind is not to die. - Thomas Campbell",
  "Always laugh when you can. It is cheap medicine. - Lord Byron",
  "Sell your cleverness and purchase bewilderment. - Rumi",
  "Knowing yourself is the beginning of all wisdom. - Aristotle",
  "When the opportunity or impulse is there .. ACT. - Rhonda Byrne",
  "Marriage is the triumph of hope over experience. - Samuel Johnson",
  "The thankful receiver bears a plentiful harvest. - William Blake",
  "In search of my mother's garden, I found my own. - Alice Walker",
  "Problems are not stop signs, they are guidelines. - Robert H. Schuller",
  "We know what we are, but know not what we may be. - William Shakespeare",
  "Believe and act as if it were impossible to fail. - Charles Kettering",
  "I destroy my enemies when I make them my friends. - Abraham Lincoln",
  "Problems are not stop signs; they are guidelines. - Robert H. Schuller",
  "If you ship doesn't come in; swim out to meet it. - Jonathan Winters",
  "Failure defeats losers, failure inspires winners. - Robert T. Kiyosaki",
  "Life has no limitations except the ones you make. - Anonymous",
  "may also like  Best 100 Soul Quotes To Inspire You Today",
  "All of life's riddles are answered in the movies. - Steve Martin",
  "We didn't lose the game; we just ran out of time. - Vince Lombardi",
  "The road to success is always under construction. - Lily Tomlin",
  "The mind needs exercise as much as the body does. - John Morgan",
  "Depression opens the door to beauty of some kind. - James Hillman",
  "Wealth is the product of man's capacity to think. - Ayn Rand",
  "It is never too late to give up your prejudices. - Henry David Thoreau",
  "There is no coming to consciousness without pain. - Carl Jung",
  "Death may be the greatest of all human blessings. - Socrates",
  "If you want to be enthusiastic, act enthusiastic. - Dale Carnegie",
  "Uncertainty and expectation are the joys of life. - William Congreve",
  "Fear is what prevents the flowering of the mind. - Jiddu Krishnamurti",
  "Thinking will not overcome fear but action will. - W. Clement Stone",
  "We can't be creative if we refuse to be confused. - Margaret Wheatley",
  "Every thought of yours is a real thing - a force. - Prentice Mulford",
  "Live your life, do your work, then take your hat. - Henry David Thoreau",
  "He who does not trust enough will not be trusted. - Laozi",
  "avel brings power and love back into your life. - Rumi",
  " it scares you, it might be a good thing to try. - Seth Godin",
  "ver confuse a single defeat with a final defeat. - F. Scott Fitzgerald",
  "en your work speaks for itself, don't interrupt. - Henry J. Kaiser",
  "d couldn't be everywhere, so he created mothers. - Jewish proverb",
  " investment in knowledge pays the best interest. - Benjamin Franklin",
  "o unto others as you would have them do unto you. - The Bible",
  "omen who seek to be equal with men lack ambition. - Timothy Leary",
  "his is your world. Shape it or someone else will. - Gary Lew",
  "nstead of competing, all we have to do is create. - Earl Nightingale",
  "You create your opportunities by asking for them. - Shakti Gawain",
  "The soul's bliss and suffering are bound together. - Jane Kenyon",
  "Strength lies in differences, not in similarities. - Stephen R. Covey",
  "Fate chooses our relatives, we choose our friends. - Jacques Delille",
  "It's not forgetting that heals. It's remembering. - Amy Greene",
  "Healing yourself is connected with healing others. - Yoko Ono",
  "To understand everything is to forgive everything. - Buddha",
  "You were born to be an original. Don't die a copy. - John Mason",
  "If you want results, then work like you want them. - Anonymous",
  "A year from now you may wish you had started today. - Karen Lamb",
  "There is no way to happiness. Happiness is the way. - Thich Nhat Hanh",
  "The most important thing about goals is having one. - Geoffry F. Abert",
  "Be content to act; and leave the talking to others. - Baltasa",
  "Not he who has much is rich, but he who gives much. - Erich Fromm",
  "Success is how high you bounce when you hit bottom. - George S. Patton",
  "A smile is a curve that sets everything straight. - Phyllis Diller",
  "Never regret something that once made you smile. - Chinese Proverb",
  "Choose well. Your choice is brief, and yet endless. - Goethe",
  "The greatest wealth is to live content with little. - Plato",
  "Life is change. Growth is optional. Choose wisely. - Karen Kaiser Clark",
  "He who has overcome his fears will truly be free. - Aristotle",
  "Everything you want is on the other side of fear. - Jack Canfield",
  "The whole secret of existence is to have no fear. - Buddha",
  "The possible's slow fuse is lit by the imagination. - Emily Dickenson",
  "How bright and transparent the moonlight of wisdom. - Hakuin",
  "The future is uncertain but the end is always near. - Jim Morrison",
  "If you judge people, you have no time to love them. - Mother Teresa",
  "The core of my personality consists of many selves. - Hans Bender",
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "Trust yourself. You know more than you think you do. - Benjamin Spock",
  "Our trials, our sorrows, and our grieves develop us. - Orison Swett Marden",
  "Life is either a daring adventure or nothing at all. - Helen Keller",
  "Dancing my dance, let others say whatever they like. - Anonymous",
  "Start every day with a smile and get it over with. - W.C. Fields",
  "The world always looks brighter from behind a smile. - Anonymous",
  "Creativity makes life more fun and more interesting. - Edward de Bono",
  "Creativity is a natural extension of our enthusiasm. - Earl Nightingale",
  "Your fortune is not something to find but to unfold. - Eric Butterworth",
  "To look at a thing is very different from seeing it. - Oscar Wilde",
  "It only takes one person to change your life - you. - Ruth Casey",
  "Ego is the immediate dictate of human consciousness. - Max Planck",
  "The world is extremely interesting to a joyful soul. - Alexandra Stoddard",
  "Live out of your imagination instead of your memory. - Les Brown",
  "To know is nothing at all; to imagine is everything. - Anatole France",
  "Wonder, rather than doubt, is the root of knowledge. - Abraham Heschel",
  "Always be on the lookout for the presence of wonder. - E. B. White",
  "Better to light a candle than to curse the darkness. - Chinese Proverb",
  "Who looks outside, dreams; who looks inside, awakes. - Carl Jung",
  "Problems can only exist if they have your attention. - Michael Beckwith",
  "Our soulmate is the one who makes life come to life. - Richard Bach",
  "Old gardeners never die, they just run out of thyme. - Gardening Saying",
  "Personality is to a man what perfume is to a flower. - Charles Schwab",
  "The journey of a thousand miles begins with one step. - Lao Tzu",
  "Wanting to be someone else is a waste of who you are. - Kurt Cobain",
  "ay also like  Dose of 113 Quotes To Do Your Inspirational Vaccination",
  "Be there for others, but never leave yourself behind. - Dodinsky",
  "Don't live the same year 75 times and call it a life. - Robin Sharma",
  "A champion is someone who gets up even when he can't. - Jack Dempsey",
  "The best way to escape from a problem is to solve it. - Alan Saporta",
  "Hard work beats talent when talent doesn't work hard. - Kevin Durant",
  "To be the best, you must be able to handle the worst. - Wilson Kanadi",
  "We fall in love BY CHANCE. We stay in love BY CHOICE. - Anonymous",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Drive your business. Let not your business drive you. - Benjamin Franklin",
  "Drawing is a door to discovering your own creativity. - Jonathan Milne",
  "Put a little fun into your life. Try dancing. - Kathryn Murray",
  "Abundance is about being rich, with or without money. - Suze Orman",
  "We can learn to be the catalysts for our own change. - Sarah Ban Breathnach",
  "If you can't change your fate, change your attitude. - Amy Tan",
  "I prefer tongue-tied knowledge to ignorant loquacity. - Marcus Tullius Cicero",
  "Gratitude will bring more into our lives immediately. - Rhonda Byrne",
  "The purpose of meditation is personal transformation. - Henepola Gunaratana",
  "If you live among wolves you have to act like a wolf. - Nikita Khrushchev",
  "Every accomplishment starts with the decision to try. - Anonymous",
  "There'll always be serendipity involved in discovery. - Jeff Bezos",
  "Being entirely honest with oneself is a good exercise. - Sigmund Freud",
  "Action will remove the doubt that theory cannot solve. - Petryl Hsieh",
  "Life is about making an impact, not making an income. - Kevin Kruse",
  "The only true wisdom is knowing that you know nothing. - Socrates",
  "Man is the only creature who refuses to be what he is. - Albert Camus",
  "Because of your smile, you make life more beautiful. - Thich Nhat Hanh",
  "Man is made by his belief. As he believes, so he is. - Johann Wolfgang von Goethe",
  "Do you prefer that you be right, or that you be happy? - A Course in Miracles",
  "Our lives are a sum total of the choices we have made. - Wayne Dyer",
  "Common sense is genius dressed in its working clothes. - Ralph Waldo Emerson",
  "All of our existing ideas have creative possibilities. - Sir Ken Robinson",
  "No great discovery was ever made without a bold guess. - Isaac Newton",
  "The more boundless your vision, the more real you are. - Deepak Chopra",
  "There is no great genius without a mixture of madness. - Aristotle",
  "Life is under no obligation to give us what we expect. - Margaret Mitchell",
  "Your fear is 100% dependent on you for its survival. - Steve Maraboli",
  "Whoever can see through all fear will always be safe. - Tao Te Ching",
  "Alone we can do so little; together we can do so much. - Helen Keller",
  "Nothing is so powerful as an idea whose hour has come. - Victor Hugo",
  "No duty is more urgent than that of returning thanks. - James Allen",
  "Transformation literally means going beyond your form. - Wayne Dyer",
  "Man masters nature not by force, but by understanding. - Jacob Bronowski",
  "Turn your can't into a can, and your dream into plan! - Cris Nikolov",
  "Sometimes the heart sees what is invisible to the eye. - H. Jackson Brown, Jr.",
  "Most powerful is he who has himself in his own power. - Seneca",
  "Crises refine life. In them you discover what you are. - Allen K. Chalmers",
  "Somewhere, something incredible is waiting to be known. - Carl Sagan",
  "Nobody can make you feel inferior without your consent. - Eleanor Roosevelt",
  "I'd rather live with a good question than a bad answer. - Aryeh Frimer",
  "You can't wake a person who is pretending to be asleep. - Anonymous",
  "The world is a jungle. You either fight or run forever. - Anonymous",
  "If at first you don't succeed skydiving is not for you. - Anonymous",
  "Never stop learning, because life never stops teaching. - Anonymous",
  "I admire anyone with their own sense of personal style. - Nicole Richie",
  "Stay strong, make them wonder how you're still smiling. - Anonymous",
  "I've never seen a smiling face that was not beautiful. - Newyorker",
  "Creativity makes a leap, then looks to see where it is. - Mason Cooley",
  "Don't apologize for who your are or the art you create. - C.J. Rider",
  "Creativity is a process more often than it is an event. - Sir Ken Robinson",
  "Dancing can reveal all the mystery that music conceals. - Charles Baudelaire",
  "People don't resist change. They resist being changed. - Peter Senge",
  "Death is nothing to fear. It is only another dimension. - Wayne Dyer",
  "It's the friends you can call up at 4 a.m. that matter. - Marlene Dietrich",
  "It is the imagination that gives shape to the universe. - Barry Lopez",
  "No act of kindness, no matter how small, is ever wasted. - Aesop",
  "It is far better to be alone, than to be in bad company. - George Washington",
  "You will never find time for anything. You must make it. - Charles Buxton",
  "Don't be pushed by your problems; be led by your dreams. - Ralph Waldo Emerson",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "I am not crazy. My reality is just different than yours. - Anonymous",
  "Courage is being scared to death but saddling up anyway. - John Wayne",
  "Dare to be different. The world is full of the ordinary. - Anonymous",
  "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  "Before anything else, preparation is the key to success. - Alexander Graham Bell",
  "One who smiles rather than rages is always the stronger. - Anonymous",
  "You can't stop the waves, but you can learn how to surf. - Jon Kabat-Zinn",
  "ay also like  Top 100 Confidence Booster Quotes",
  "It's choice - not chance - that determines your destiny. - Jean Nidetch",
  "Every act of creation begins with an act of destruction. - Pablo Picasso",
  "The earth sets some music going in us and dance we must. - Ludwig Boone",
  "It is by logic we prove. It is by intuition we discover. - Henri Poincare",
  "I'm not the kind of person who gives up without a fight. - Michael Landon",
  "What will they think of me? Must be put aside for bliss. - Joseph Campbell",
  "The purpose of speech is to enliven the bliss in others. - Maharishi Mahesh Yogi",
  "Control of consciousness determines the quality of life. - Mihaly Csikszentmihalyi",
  "Judge a man by his questions rather than by his answers. - Voltaire",
  "Curiosity will conquer fear even more than bravery will. - James Stephens",
  "Death is like the rumble of distant thunder at a picnic. - W. H. Auden",
  "Decide that you want it more than you are afraid of it. - Bill Cosby",
  "I am the master of my fate; I am the captain of my soul. - William Ernest Henley",
  "Never love anybody who treats you like you are ordinary. - Oscar Wilde",
  "It's not stress that kills us, it is our reaction to it. - Hans Selye",
  "You can't hold a man down without staying down with him. - Booker T. Washington",
  "No matter how far you've gone on a wrong road, turn back. - Turkish Proverb",
  "The successful man is one who had the chance and took it. - Roger Babson",
  "An eye for eye only ends up making the whole world blind. - M. K. Gandhi",
  "Always forgive your enemies; nothing annoys them so much. - Oscar Wilde",
  "Science never solves a problem without creating ten more. - George Bernard Shaw",
  "Forget what hurt you but never forget what it taught you. - Anonymous",
  "The most common form of despair is not being who you are. - Soren Kierkegaard",
  "For success, attitude is equally as important as ability. - Harry F. Banks",
  "A smile is happiness you'll find right under your nose. - Tom Wilson",
  "Creativity - like human life itself - begins in darkness. - Julia Cameron",
  "To find joy in work is to discover the fountain of youth. - Pearl S. Buck",
  "Being rich is having money; being wealthy is having time. - Margaret Bonnano",
  "Not in numbers but in unity that our great strength lies. - Thomas Paine",
  "Never make a defense or an apology until you are accused. - King Charles I",
  "The most effective way to manage change is to create it. - Peter F. Drucker",
  "It is a miracle that curiosity survives formal education. - Albert Einstein",
  "We no longer vibrate to fear when we're attuned to love. - Frank Whitney",
  "Wherever you are, it is your friends who make your world. - William James",
  "I am a minimalist. I like saying the most with the least. - Bob Newhart",
  "I only go out to get me a fresh appetite for being alone. - Lord Byron",
  "See yourself living in abundance and you will attract it. - Rhonda Byrne",
  "Put not your trust in money, but put your money in trust. - Oliver Wendell Holmes",
  "Life consists of what a person is thinking about all day. - Ralph Waldo Emerson",
  "As soon as you trust yourself, you will know how to live. - Goethe",
  "Fear is a natural reaction to moving closer to the truth. - Pema Chodron",
  "He who doesn't understand history is doomed to repeat it. - Pittacus Lore",
  "Sometimes the wrong choices bring us to the right places. - Anonymous",
  "Intuition will tell the thinking mind where to look next. - Jonas Salk",
  "Creativity can be described as letting go of certainties. - Gail Sheehy",
  "Letting your mind play is the best way to solve problems. - Bill Watterson",
  "It's not what you look at that matters, it's what you see. - Henry David Thoreau",
  "Those we love don't go away, they walk beside us everyday. - Anonymous",
  "Don't worry about failure; you only have to be right once. - Drew Houston",
  "I want to be your favorite hello and your hardest goodbye. - Anonymous",
  "If you don't like where you are, move. You are not a tree. - Anonymous",
  "If you try, you risk failure. If you don't, you ensure it. - Anonymous",
  "God has given you one face, and you make yourself another. - William Shakespeare",
  "I am not what happened to me. I am what I chose to become. - Carl Jung",
  "Creativity gives hope that there can be a worthwhile idea. - Edward de Bono",
  "Vision animates, inspires, transforms purpose into action. - Warren Bennis",
  "Remember there's no such thing as a small act of kindness. - Scott Adams",
  "God is not found in places. God is found in consciousness. - Joel Goldsmith",
  "I have no special talents. I am only passionately curious. - Albert Einstein",
  "Enthusiasm, like the breath of God, transforms everything. - Gail Sher",
  "Nobody has a money problem - there are only idea problems. - Robert H. Schuller",
  "Forgiveness is not a one-time-only event. It is a process. - Rhonda Britten",
  "To carry a grudge is like being stung to death by one bee. - William H. Walton",
  "If you have time to be mindful, you have time to meditate. - Ajahn Chah",
  "To believe in something, and not to live it, is dishonest. - Mahatma Gandhi",
  "Find what makes your heart sing and create your own music. - Mac Anderson",
  "Whatever our souls are made of, his and mine are the same. - Emily Brontë",
];

export default quotes;