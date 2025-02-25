import { expect, it, vi } from "vitest"
import { performOp } from "./performOp"

vi.mock('./performOp', () => ({
  performOp: vi.fn().mockReturnValue(10),
}))

it('tests performOp module', () => {
  expect(performOp(1, 2)).toBe(5)
})