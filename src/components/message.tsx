import React from 'react';
import {
  ClipboardIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  RefreshCcwIcon,
} from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Button } from './ui/button';

interface MessageProps {
  sender: 'user' | 'bot';
  name: string;
  avatarUrl: string;
  fallbackInitials: string;
  message: string;
}

const Message: React.FC<MessageProps> = ({
  sender,
  name,
  avatarUrl,
  fallbackInitials,
  message,
}) => {
  return (
    <div className="flex items-start gap-4">
      <Avatar className="w-6 h-6 border">
        <AvatarImage src={avatarUrl} />
        <AvatarFallback>{fallbackInitials}</AvatarFallback>
      </Avatar>
      <div className="grid gap-1">
        <div className="font-bold">{name}</div>
        <div className="prose text-muted-foreground">
          <p>{message}</p>
        </div>
        {sender === 'bot' && (
          <div className="flex items-center gap-2 py-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
            >
              <ClipboardIcon className="w-4 h-4" />
              <span className="sr-only">Copy</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
            >
              <ThumbsUpIcon className="w-4 h-4" />
              <span className="sr-only">Upvote</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
            >
              <ThumbsDownIcon className="w-4 h-4" />
              <span className="sr-only">Downvote</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-4 h-4 hover:bg-transparent text-stone-400 hover:text-stone-900"
            >
              <RefreshCcwIcon className="w-4 h-4" />
              <span className="sr-only">Regenerate</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
