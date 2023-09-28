import Table, {TableProps} from './Table';
import { FooterComponents as Summary } from './Footer';
import Column from './sugar/Column';
import ColumnGroup from './sugar/ColumnGroup';
import { INTERNAL_COL_DEFINE } from './utils/legacyUtil';
export * from './interface';

export { Summary, Column, ColumnGroup, INTERNAL_COL_DEFINE, TableProps };

export default Table;
