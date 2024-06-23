'use client';
import { FC } from 'react';
import { Button } from './ui/button';
import { BotIcon } from 'lucide-react';

interface OnboardingSidebarProps {
  children: React.ReactNode;
}

const OnboardingSidebar: FC<OnboardingSidebarProps> = ({ children }) => {
  return (
    <div className="grid md:grid-cols-[260px_1fr] min-h-screen w-full">
      <div className="bg-neutral-900 hidden md:flex flex-col gap-2 text-white p-6">
        <div className="sticky top-0 p-2 mb-4">
          <Button
            className="w-full text-left px-2 justify-start p hover:bg-neutral-900 hover:text-neutral-50 gap-2"
            variant="ghost"
          >
            <div className="rounded-full bg-white text-black flex items-center justify-center w-7 h-7">
              <BotIcon className="h-4 w-4" />
            </div>
            <div className="grow text-ellipsis overflow-hidden whitespace-nowrap text-sm">
              Новый чат
            </div>
          </Button>
        </div>
        <p className="text-sm mb-8">
          Получайте более умные ответы, загружайте файлы и изображения и многое
          другое.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">
          Зарегистрироваться
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded">
          Войти
        </button>
      </div>
      <div className="flex flex-col">{children}</div>
    </div>
  );
};

export default OnboardingSidebar;
