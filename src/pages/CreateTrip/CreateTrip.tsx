import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InviteGuestsModal } from '../../components/InviteGuestsModal/InviteGuestsModal';
import { ConfirmTripModal } from '../../components/ConfirmTripModal/ConfirmTripModal';
import { DestinationAndDateStep } from '../../components/Steps/DestinationAndDateStep/DestinationAndDateStep';
import { InviteGuestsStep } from '../../components/Steps/InviteGuestsStep/InviteGuestsStep';

export function CreateTrip() {
    const navigate = useNavigate();

    const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
    const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false);
    const [emailsToInvite, setEmailsToInvite] = useState([]);
    const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

    const openGuestsInput = () => {
        setIsGuestsInputOpen(true);
    };

    const closeGuestsInput = () => {
        setIsGuestsInputOpen(false);
    };

    const openGuestsModal = () => {
        setIsGuestsModalOpen(true);
    };

    const closeGuestsModal = () => {
        setIsGuestsModalOpen(false);
    };

    const openConfirmTripModal = () => {
        setIsConfirmTripModalOpen(true);
    };

    const closeConfirmTripModal = () => {
        setIsConfirmTripModalOpen(false);
    };

    const addNewEmailToInvite = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const email = data.get('email')?.toString();

        if (!email) {
            return;
        }

        if (emailsToInvite.includes(email)) {
            return;
        }

        setEmailsToInvite([...emailsToInvite, email]);

        event.currentTarget.reset();
    };

    const removeEmailFromInvites = (emailToRemove: string) => {
        const newEmailList = emailsToInvite.filter(
            email => email !== emailToRemove
        );
        setEmailsToInvite(newEmailList);
    };

    const createTrip = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate('/trips/');
    };

    return (
        <main className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
            <section className="max-w-3xl w-full px-6 text-center space-y-10">
                <div className="flex flex-col items-center gap-3">
                    <img src="/logo.svg" alt="plann.er" />
                    <p className="text-zinc-300 text-lg">
                        Convide seus amigos e planeje sua próxima viagem!
                    </p>
                </div>
                <section className="space-y-4">
                    <DestinationAndDateStep
                        isGuestsInputOpen={isGuestsInputOpen}
                        closeGuestsInput={closeGuestsInput}
                        openGuestsInput={openGuestsInput}
                    />
                    {isGuestsInputOpen && (
                        <InviteGuestsStep
                            openGuestsModal={openGuestsModal}
                            openConfirmTripModal={openConfirmTripModal}
                            emailsToInvite={emailsToInvite}
                        />
                    )}
                </section>
                <p className="text-zinc-500 text-sm">
                    Ao planejar sua viagem pela plann.er você automaticamente
                    concorda <br /> com nossos{' '}
                    <a href="#" className="text-zinc-300 underline">
                        termos de uso{' '}
                    </a>{' '}
                    e{' '}
                    <a href="#" className="text-zinc-300 underline">
                        políticas de privacidade
                    </a>
                    .
                </p>
            </section>

            {isGuestsModalOpen && (
                <InviteGuestsModal
                    closeGuestsModal={closeGuestsModal}
                    emailsToInvite={emailsToInvite}
                    addNewEmailToInvite={addNewEmailToInvite}
                    removeEmailFromInvites={removeEmailFromInvites}
                />
            )}

            {isConfirmTripModalOpen && (
                <ConfirmTripModal
                    closeConfirmTripModal={closeConfirmTripModal}
                    createTrip={createTrip}
                />
            )}
        </main>
    );
}
