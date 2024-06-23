import React from 'react';
import OnboardingModelsMenu from '@/components/onboarding-models-menu';
import OnboardingSidebar from '@/components/onboarding-sidebar';
import SuggestedActionButton from '@/components/suggested-action-button';
import { ArrowUpIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
export default function OnboardingPage() {
  return (
    <OnboardingSidebar>
      <div className="flex flex-col min-h-screen">
        <div className="sticky top-0 p-2">
          <OnboardingModelsMenu />
        </div>
        <div className="flex flex-1 flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center mb-8">
            <img
              src="https://asset.brandfetch.io/idfDTLvPCK/idfkFVkJdH.png"
              alt="Logo"
              className="w-12 h-12 mb-4"
            />
            <h1 className="text-2xl font-semibold text-center">
              Чем я могу помочь вам сегодня?
            </h1>
          </div>
          <div className="grid gap-4 md:grid-cols-2 w-full max-w-3xl">
            <SuggestedActionButton
              title="Спланируй «день психического здоровья»"
              description="так, чтобы помочь мне расслабиться"
            />
            <SuggestedActionButton
              title="Напиши электронное письмо"
              description="с запросом расценок у местных сантехников"
            />
            <SuggestedActionButton
              title="Помоги мне выбрать"
              description="наряд, чтобы хорошо смотреться на фото"
            />
            <SuggestedActionButton
              title="Проверь мои знания"
              description="о древних цивилизациях"
            />
          </div>
        </div>
        <div className="flex self-center w-1/2 items-center gap-2">
          <Textarea
            placeholder="Спросить CohereAI..."
            name="message"
            id="message"
            rows={1}
            className="flex-1 min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
          />
          <Button type="submit" size="icon" className="w-8 h-8" disabled>
            <ArrowUpIcon className="w-4 h-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
        <p className="text-xs font-medium text-center text-neutral-700 mt-2 mb-5">
          Cohere AI can make mistakes. Consider checking important information.
        </p>
      </div>
    </OnboardingSidebar>
  );
}
