/**
 * Reveal highlight
 */
import { pointer } from 'popmotion';
import styler, { Styler } from 'stylefire';

const bodyStyler: Styler = styler(document.body, {});
const setPosition = ({ x, y }) => {
  bodyStyler.set('--light-position', `${x - 90}px ${y - 90}px`);
};

pointer().start(setPosition);
