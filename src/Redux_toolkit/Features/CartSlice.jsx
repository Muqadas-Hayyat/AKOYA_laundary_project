import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  service: null,
  garments: [],
  steam: null,
  incense: { enabled: false, price: 0, type: null },
  fragrance: { enabled: false, price: 0, type: null },
  packaging: { enabled: false, price: 0, type: null },
  personalizedCard: { from: "", to: "" },

 
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setService: (state, action) => {
      state.service = action.payload
    },
    removeService: (state) => {
      state.service = null
    },

    // garments
    addGarment: (state, action) => {
      const existing = state.garments.find(x => x.id === action.payload.id)
      if (existing) {
        existing.qty += 1
      } else {
        state.garments.push({ ...action.payload, qty: 1 })
      }
    },
    incrementQty: (state, action) => {
      const g = state.garments.find(x => x.id === action.payload)
      if (g && g.qty < 10) {
        g.qty += 1
      }
    },
    decrementQty: (state, action) => {
      const g = state.garments.find(x => x.id === action.payload)
      if (g) {
        if (g.qty > 1) {
          g.qty -= 1
        } else {
          state.garments = state.garments.filter(x => x.id !== action.payload)
        }
      }
    },
    removeGarment: (state, action) => {
      state.garments = state.garments.filter(x => x.id !== action.payload)
    },

    // steam
    addSteam: (state) => {
      state.steam = true
      state.garments = state.garments.map(g => ({
        ...g,
        finishingSteamPrice: g.finishingSteamPrice || 5
      }))
    },
    removeSteam: (state) => {
      state.steam = false
      state.garments = state.garments.map(g => ({
        ...g,
        finishingSteamPrice: 0
      }))
    },

    // incense
    addIncense: (state, action) => {
      state.incense = {
        enabled: true,
        price: action.payload.price,
        type: action.payload.type
      }
    },
    removeIncense: (state) => {
      state.incense = { enabled: false, price: 0, type: null }
    },

    // fragrance
    addFragrance: (state, action) => {
      state.fragrance = {
        enabled: true,
        price: action.payload.price,
        type: action.payload.type
      }
    },
    removeFragrance: (state) => {
      state.fragrance = { enabled: false, price: 0, type: null }
    },

    // packaging
    addPackaging: (state, action) => {
      state.packaging = {
        enabled: true,
        price: action.payload.price,
        type: action.payload.type
      }
    },
    removePackaging: (state) => {
      state.packaging = { enabled: false, price: 0, type: null }
    },

    // personalized card
    addPersonalizedCard: (state, action) => {
      state.personalizedCard = {
        from: action.payload.from,
        to: action.payload.to
      }
    },

    clearPersonalizedCard: (state) => {
  state.personalizedCard = { from: '', to: '' }
},

   
  }
})

export const {
  setService,
  removeService,
  addGarment,
  decrementQty,
  incrementQty,
  removeGarment,
  addSteam,
  removeSteam,
  addIncense,
  removeIncense,
  addFragrance,
  removeFragrance,
  addPackaging,
  removePackaging,
  addPersonalizedCard,
  clearPersonalizedCard
} = cartSlice.actions

export default cartSlice.reducer
