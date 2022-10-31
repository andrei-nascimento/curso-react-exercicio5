export default function CashRegister({ total }) {
    return <p>Total do pedido: R$ {total.toFixed(2)}</p>
}