'use client';
import { BotIcon, PenIcon } from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';
import { Button } from './ui/button';

type ChatHistory = {
  date: string;
  items: {
    title: string;
    url: string;
  }[];
};

interface SidebarProps {
  historyEntries: ChatHistory[];
  children: React.ReactNode;
}

const ChatHistorySidebar: FC<SidebarProps> = ({ historyEntries, children }) => {
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

  const handleEntryClick = (title: string) => {
    setSelectedEntry(title);
  };

  return (
    <div className="grid md:grid-cols-[260px_1fr] min-h-screen w-full">
      <div className="bg-neutral-900 hidden md:flex flex-col gap-2 text-white">
        <div className="sticky top-0 p-2">
          <Button
            className="w-full text-left px-2 justify-start p hover:bg-neutral-900 hover:text-neutral-50 gap-2"
            variant="ghost"
          >
            <div className="rounded-full bg-white text-black flex items-center justify-center w-7 h-7">
              <BotIcon className="h-4 w-4" />
            </div>
            <div className="grow text-ellipsis overflow-hidden whitespace-nowrap text-sm">
              Cohere AI
            </div>
            <PenIcon className="h-4 w-4" />
          </Button>
        </div>
        <div className="overflow-auto flex-1">
          {historyEntries.map((entry) => (
            <div key={entry.date} className="grid gap-1 p-2">
              <div className="text-stone-500 text-xs font-medium px-2">
                {entry.date}
              </div>
              {entry.items.map((item) => (
                <Link
                  key={item.title}
                  className={`truncate overflow-hidden flex-1 text-sm transition-colors rounded-md whitespace-nowrap p-2 block ${
                    selectedEntry === item.title
                      ? 'bg-neutral-800 text-white'
                      : 'hover:bg-neutral-900 hover:text-neutral-50'
                  }`}
                  href={item.url}
                  onClick={() => handleEntryClick(item.title)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default ChatHistorySidebar;
