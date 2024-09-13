import { Plus } from 'lucide-react';
import { useState } from 'react';
import { CreateActivityModal } from '../../components/CreateActivityModal/CreateActivityModal';
import { ImportantLinks } from '../../components/ImportantLinks/ImportantLinks';
import { Guests } from '../../components/Guests/Guests';
import { Activities } from '../../components/Activities/Activities';
import { DestinationAndDateHeader } from '../../components/DestinationAndDateHeader/DestinationAndDateHeader';
import { Button } from '../../components/Button/Button';

export function TripDetails() {
    const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false);

    const openCreateActivityModal = () => {
        setIsCreateActivityModalOpen(true);
    };

    const closeCreateActivityModal = () => {
        setIsCreateActivityModalOpen(false);
    };

    return (
        <section className="max-w-6xl px-6 py-10 mx-auto space-y-8">
            <DestinationAndDateHeader />
            <main className="flex gap-16 px-4">
                <section className="flex-1 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-3xl font-semibold">Atividades</h2>
                        <Button onClick={openCreateActivityModal}>
                            <Plus className="size-5" />
                            Cadastrar atividade
                        </Button>
                    </div>
                    <Activities />
                </section>

                <section className="w-80 space-y-6">
                    <ImportantLinks />
                    <Guests />
                </section>
            </main>
            {isCreateActivityModalOpen && (
                <CreateActivityModal
                    closeCreateActivityModal={closeCreateActivityModal}
                />
            )}
        </section>
    );
}
