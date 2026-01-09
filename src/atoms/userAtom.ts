import { atom } from "jotai/vanilla";
import { USER_WITHOUT_SUBSCRIPTION } from "@/mocks/user";
import {User} from '@/types/user'

export const userAtom = atom<User>(USER_WITHOUT_SUBSCRIPTION);
