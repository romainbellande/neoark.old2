import * as mongoose from 'mongoose';

import { Config } from '@/config';
import { UserSchema } from '../../user.schema';

export const userModelMock = mongoose.model(Config.USER_MODEL, UserSchema);
