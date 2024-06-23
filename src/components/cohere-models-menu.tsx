import { ChevronDownIcon, PlusIcon, ZapIcon } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const CohereModelsMenu = () => {
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
      <DropdownMenuContent align="start" className="max-w-[300px]">
        <DropdownMenuItem className="items-start gap-2">
          <PlusIcon className="w-4 h-4 mr-2 translate-y-1 shrink-0" />
          <div>
            <div className="font-medium">command-r-plus</div>
            <div className="text-muted-foreground/80">
              Best for complex RAG workflows and multi-step tools.
            </div>
            <div className="text-muted-foreground/80">
              128k tokens, 4k context
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="items-start gap-2">
          <ZapIcon className="w-4 h-4 mr-2 translate-y-1 shrink-0" />
          <div>
            <div className="font-medium">command-r</div>
            <div className="text-muted-foreground/80">
              Ideal for code generation and agents.
            </div>
            <div className="text-muted-foreground/80">
              128k tokens, 4k context
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="items-start gap-2">
          <ZapIcon className="w-4 h-4 mr-2 translate-y-1 shrink-0" />
          <div>
            <div className="font-medium">command</div>
            <div className="text-muted-foreground/80">
              Reliable for general tasks.
            </div>
            <div className="text-muted-foreground/80">
              4k tokens, 4k context
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CohereModelsMenu;
