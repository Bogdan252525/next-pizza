import React from 'react'
import { WhiteBlock } from './white-block'
import { CheckoutItemDetails } from './checkout-item-details'
import { ArrowRight, Package, Percent, Truck } from 'lucide-react'
import { Button, Skeleton } from '../ui'
import { cn } from '@/shared/lib/utils'

const VAT = 15
const DELIVERY_PRICE = 250

interface Props {
  totalAmount: number
  loading?: boolean
  className?: string
}

export const CheckoutSidebar: React.FC<Props> = ({
  totalAmount,
  loading,
  className,
}) => {
  const vatPrice = (totalAmount * VAT) / 100
  const totalPrice = totalAmount + DELIVERY_PRICE + vatPrice

  return (
    <WhiteBlock className={cn('p-6 sticky top-4', className)}>
      <div className="flex flex-col gap-1">
        <span className="text-xl">Итого</span>
        {loading ? (
          <Skeleton className="w-48 h-11" />
        ) : (
          <span className="h-11 text-[34px] font-extrabold">{totalPrice} Р</span>
        )}
      </div>

      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Package
              size={18}
              className="mr-2 text-gray-400"
            />
            Стоимость корзины:
          </div>
        }
        value={
          loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${totalAmount} Р`
        }
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Percent
              size={18}
              className="mr-2 text-gray-400"
            />
            Налоги:
          </div>
        }
        value={
          loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${vatPrice} Р`
        }
      />
      <CheckoutItemDetails
        title={
          <div className="flex items-center">
            <Truck
              size={18}
              className="mr-2 text-gray-400"
            />
            Доставка:
          </div>
        }
        value={
          loading ? <Skeleton className="h-6 w-16 rounded-[6px]" /> : `${DELIVERY_PRICE} Р`
        }
      />

      <Button
        loading={loading}
        type="submit"
        className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
      >
        Перейти к оплате
        <ArrowRight className="w-5 ml-2" />
      </Button>
    </WhiteBlock>
  )
}
