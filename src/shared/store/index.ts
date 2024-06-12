import { createSharedSlice } from './shared-store';
import { createFishSlice } from './fish-store';
import { createBearSlice } from './bear-store';
import { create } from 'zustand'
import { BearSlice, FishSlice, SharedSlice } from './types'
import { devtools } from 'zustand/middleware'

export const useStore = create<BearSlice & FishSlice & SharedSlice>()(
  devtools(
    (...a) => ({
      ...createBearSlice(...a),
      ...createFishSlice(...a),
      ...createSharedSlice(...a),
    }))
)

