import { ChevronDownIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const OnboardingModelsMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-1 rounded-xl px-3 h-10 data-[state=open]:bg-muted text-lg"
        >
          Cohere <span className="text-muted-foreground">Models</span>
          <ChevronDownIcon className="w-4 h-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="max-w-[300px] p-4">
        <div className="font-medium text-lg mb-2">
          Зарегистрируйтесь, чтобы ознакомиться с нашей последней моделью
        </div>
        <div className="text-muted-foreground/80 mb-4">
          Получайте более умные ответы, загружайте файлы, анализируйте
          изображения и просматривайте веб-страницы с помощью нашей последней
          модели.
        </div>
        <div className="flex gap-2">
          <Button variant="default" className="px-4">
            Войти
          </Button>
          <Button variant="outline" className="px-4">
            Зарегистрироваться
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default OnboardingModelsMenu;
