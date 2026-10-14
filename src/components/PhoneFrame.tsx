import s from './PhoneFrame.module.css';

export type Screen = 'home' | 'fund' | 'transfer' | 'transactions' | 'collect' | 'payout';

const alts: Record<Screen, string> = {
  home: 'Fiam Finance dashboard showing a ₦66,250 balance, account number and quick actions',
  fund: 'Fund wallet screen with your personal account number',
  transfer: 'Send to bank screen with amount, recent recipients and transfer fee',
  transactions: 'Transactions screen with search, filters and daily totals',
  collect: 'Collect crypto screen with asset picker, deposit QR code and address',
  payout: 'Crypto payout screen with amount, destination address and fee breakdown',
};

/**
 * A phone cut off at the bottom edge, showing a pre-rendered app screen (390×844 @2x,
 * crypto hidden except on collect/payout). `hero`/`heroB` are the home hero sizes, `card` the home
 * feature cards, `section`/`sectionTall` the inner-page feature rows.
 */
export function PhoneFrame({
  screen,
  size,
  bordered = false,
  priority = false,
  liftActions = false,
}: {
  screen: Screen;
  size: 'hero' | 'heroB' | 'card' | 'section' | 'sectionTall';
  bordered?: boolean;
  priority?: boolean;
  /**
   * Re-draw the home screen's Send/Fund/History/Limits card in its own layer so it sits above
   * a neighbouring illustration (z-index 2), as it does in the live prototype. Home + hero only.
   */
  liftActions?: boolean;
}) {
  return (
    <div className={`${s.frame} ${s[size]} ${bordered ? s.bordered : ''}`}>
      <div className={s.screen}>
        <img
          src={`/images/screens/${screen}.webp`}
          alt={alts[screen]}
          width={780}
          height={1688}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
        />
      </div>
      {liftActions && (
        <div className={s.actions} style={{ backgroundImage: `url(/images/screens/${screen}.webp)` }} aria-hidden="true" />
      )}
    </div>
  );
}
