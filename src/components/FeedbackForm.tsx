'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import ButtonForm from './ButtonForm';

export interface FeedbackFormProps {
  classname?: string;
}

export default function FeedbackForm({}: FeedbackFormProps) {
  const t = useTranslations('feedbackForm');

  return (
    <form className={`flex flex-col gap-7 px-6 pt-7`}>
      <h3 className="text-2xl leading-[28px] text-yellow">{t('title')}</h3>
      <div className="flex flex-col gap-5">
        <label className="w-full ">
          <span className="  text-yellow block text-lg leading-[21px] w-full">
            {t('firstname')}
          </span>
          <input
            name="firstName"
            className="text-yellow  text-lg leading-[21px] block w-full  bg-brown border-t-0 border-x-0 border-b-[1px] border-yellow outline-none static"
          />
        </label>
        <label>
          <span className="text-yellow block text-lg leading-[21px]">
            {t('lastname')}
          </span>
          <input
            name="lasttName"
            className="text-yellow  text-lg leading-[21px] block w-full static bg-brown border-t-0 border-x-0 border-b-[1px] border-yellow outline-none"
          />
        </label>
        <label>
          <span className="text-yellow block text-lg leading-[21px]">
            {t('quastion')}
          </span>
          <input
            name="quastion"
            className="text-yellow  text-lg leading-[21px] block w-full static bg-brown border-t-0 border-x-0 border-b-[1px] border-yellow outline-none"
          />
        </label>
      </div>
      <ButtonForm disabled theme="light">
        {t('send')}
      </ButtonForm>
    </form>
  );
}
