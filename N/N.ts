import {dialog} from './ui/dialog';
import {search} from './search';

/**
 * Declaration of 'N' API virtual namespace.
 *
 * Note that N and it children (N/ui/message etc.) must be imported using require or define in order to obtain a reference.
 * This declaration is used as a hint to the IDE and is not an actual global object at runtime.
 */
class N {
  dialog = dialog;
  search = search;
}