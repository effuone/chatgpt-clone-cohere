import CohereModelsMenu from '@/components/cohere-models-menu';
import ChatHistorySidebar from '@/components/chat-history-sidebar';
import Message from '@/components/message';

const historyEntries = [
  {
    date: 'Today',
    items: [
      {
        title: 'Calculus III Roadmap',
        url: '#',
      },
      {
        title: 'How to become a frontend developer',
        url: '#',
      },
      {
        title: 'Preparation for a physics exam',
        url: '#',
      },
    ],
  },
  {
    date: 'Yesterday',
    items: [
      {
        title: 'Discrete math syllabus',
        url: '#',
      },
      {
        title: 'Linear algebra exercises',
        url: '#',
      },
    ],
  },
];
export default function ChatPage() {
  return (
    <ChatHistorySidebar historyEntries={historyEntries}>
      <div className="sticky top-0 p-2">
        <CohereModelsMenu />
      </div>
      <div className="flex flex-col items-start flex-1 max-w-2xl gap-8 px-4 mx-auto">
        <Message
          sender="user"
          name="You"
          avatarUrl="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
          fallbackInitials="YO"
          message="Can you explain airplane turbulence to someone who has never flown before? Make it conversational and concise."
        />
        <Message
          sender="bot"
          name="Cohere Bot"
          avatarUrl="/placeholder-user.jpg"
          fallbackInitials="CB"
          message="Of course! Imagine you're in a car driving down a bumpy road, and the ride isn't perfectly smooth. Sometimes, you hit small potholes or bumps, right? Well, when you're in an airplane, it's kind of like that, but in the sky. Airplane turbulence happens when the plane encounters pockets of air that are moving differently. It's like sailing a boat on choppy water. These air pockets can make the plane feel like it's bouncing or shaking a bit. It's completely normal and usually not dangerous at all."
        />
      </div>
      <div className="max-w-2xl w-full sticky bottom-0 mx-auto py-2 flex flex-col gap-1.5 px-4 bg-background"></div>
    </ChatHistorySidebar>
  );
}
