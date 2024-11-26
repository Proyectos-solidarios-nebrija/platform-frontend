import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@ui/tooltip';
import { Input } from '@ui/input';
import { PlusIcon } from 'lucide-react';

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto mt-24 flex gap-2">
      <Input className="p-2" type="text" placeholder="Buscar..." />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>
              <PlusIcon size={24} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Crear</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
