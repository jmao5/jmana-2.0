import { COLOR } from '@/utils/constants'
import { FadeLoader } from 'react-spinners'

export default function LoadingSpiner() {
  return (
    <h1 className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <FadeLoader color={COLOR.PRIMARY} speedMultiplier={1.3} />
    </h1>
  )
}
