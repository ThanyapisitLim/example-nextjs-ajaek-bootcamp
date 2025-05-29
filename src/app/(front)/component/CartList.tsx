"use client"

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCartStore } from "@/lib/cart-store";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartList() {
    const router = useRouter()
    const items = useCartStore((state) => state.items)
    const removeItem = useCartStore((state) => state.removeItem)
    const clearCart = useCartStore((state) => state.clearCart)
    const totalPrice = useCartStore((state) => state.totalPrice())

    if (items.length === 0) {
        return <div className="text-center mt-20">Cart Empty...</div>
    }

    return (
        <div className="mx-auto max-w-4xl mt-20">
            <h1 className="text-xl mb-4">List Item</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Item ID</TableHead>
                        <TableHead>Item Name</TableHead>
                        <TableHead>Item Price</TableHead>
                        <TableHead>Item Quantity</TableHead>
                        <TableHead>Total Price</TableHead>
                        <TableHead>Tools</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        items.map((i) => (
                            <TableRow key={i.productId}>
                                <TableCell>{i.productId}</TableCell>
                                <TableCell>{i.title}</TableCell>
                                <TableCell>{i.price}</TableCell>
                                <TableCell>{i.qty}</TableCell>
                                <TableCell>{(i.price * i.qty).toFixed(2)}</TableCell>
                                <TableCell>
                                    <Button onClick={() => { removeItem(i.productId) }}>
                                        <Trash />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            <div className="text-right mt-4 mr-15">
                <div className="font-bold text-xl">
                    Total : {totalPrice.toFixed(2)}
                </div>
                <div className="mt-5">
                    <Button onClick={() => { clearCart() }}>Clear Cart</Button>
                </div>
                <div className="mt-5">
                    <Button onClick={() => {
                        clearCart()
                        router.replace('/product')
                    }}>Confirm</Button>
                </div>
            </div>
        </div>
    );
}