import User from '../../Model/User'
import Message from '../../Model/Message'

export const Users = [
  new User({ id: 1, name: 'Team Discussions', role: 'Lorem Ipsum is', isPrivate: true, image: require('@/assets/images/user/user-1.jpg'), isActive: true }),
  new User({ id: 2, name: 'Designer', role: 'There are many ',  image: require('../../assets/images/user/07.jpg'), isActive: false }),
  new User({ id: 3, name: 'Announcement', role: 'This Sunday we', isPrivate: true, image: require('../../assets/images/user/06.jpg'), isActive: true }),
  new User({ id: 4, name: 'Developer', role: 'passages of Lorem', image: require('../../assets/images/user/user-4.jpg'), isActive: true }),
  new User({ id: 5, name: 'Testing Team', role: 'Lorem Ipsum used', image: require('../../assets/images/user/user-5.jpg'), isActive: false }),
  new User({ id: 6, name: 'Paul Molive', role: 'translation by', image: require('../../assets/images/user/user-6.jpg'), isActive: true }),
  new User({ id: 7, name: 'Paige Turner', role: 'Lorem Ipsum which', image: require('../../assets/images/user/05.jpg'), isActive: false }),
  new User({ id: 8, name: 'Barb Ackue', role: 'simply random text', image: require('../../assets/images/user/06.jpg'), isActive: true }),
  new User({ id: 9, name: 'Maya Didas', role: ' but also the leap', image: require('../../assets/images/user/07.jpg'), isActive: false }),
  new User({ id: 10, name: 'Monty Carlo', role: 'Contrary to popular', image: require('../../assets/images/user/08.jpg'), isActive: true })
]

export const MessagesUser1 = [
  new Message({ text: 'How can we help? We\'re here for you! 😄', userId: 5, me: true, time: '6:45' }),
  new Message({ text: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?🤔', userId: 15, me: false, time: '6:48' }),
  new Message({ text: 'Absolutely!\n' + 'SocialV Dashboard is the responsive bootstrap 4 admin template.', userId: 5, me: true, time: '6:50' }),
  new Message({ text: 'Looks clean and fresh UI.', userId: 15, me: false, time: '6:55' }),
  new Message({ text: 'Thanks, from ThemeForest.', userId: 5, me: true, time: '6:59' }),
  new Message({ text: 'I will purchase it for sure.', userId: 15, me: false, time: '7:05' }),
  new Message({ text: 'Okay Thanks...', userId: 5, me: true, time: '7:07' }),
  new Message({ text: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?', userId: 15, me: false, time: '7:08' }),
  new Message({ text: 'Absolutely!\n' + 'SocialV Dashboard is the responsive bootstrap 4 admin template.', userId: 5, me: true, time: '7:10' }),
  new Message({ text: 'Looks clean and fresh UI.', userId: 15, me: false, time: '7:12' }),
  new Message({ text: 'Okay Thanks...', userId: 5, me: true, time: '7:20' })
]

export const MessagesUser2 = [
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message()
]

export const MessagesUser3 = [
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message()
]
export const MessagesUser4 = [
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message(),
  new Message()
]
