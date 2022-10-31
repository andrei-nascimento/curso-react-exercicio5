export default function CashRegister({ total }) {
    return <p className="register">Total do pedido: R$ {total.toFixed(2)}</p>
}