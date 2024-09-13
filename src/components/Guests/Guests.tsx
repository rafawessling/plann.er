import { CircleDashed, UserCog } from 'lucide-react';
import { Button } from '../Button/Button';

export function Guests() {
    return (
        <div className="w-full h-px bg-zinc-800">
            <div className="space-y-6">
                <h2 className="font-semibold text-xl">Convidados</h2>
                <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-zinc-100">
                                Ana Paula Soares
                            </span>
                            <span className="block text-sm text-zinc-400 truncate">
                                anapaula@email.com
                            </span>
                        </div>
                        <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-zinc-100">
                                Joana da Silva
                            </span>
                            <span className="block text-sm text-zinc-400 truncate">
                                joada_da_silva@email.com
                            </span>
                        </div>
                        <CircleDashed className="text-zinc-400 size-5 shrink-0" />
                    </div>
                </div>
                <Button variant="secondary" size="full">
                    <UserCog className="size-5" />
                    Gerenciar convidados
                </Button>
            </div>
        </div>
    );
}
