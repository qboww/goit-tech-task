import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/catalog/catalogSelectors";
import Catalog from "../../components/Catalog/Catalog";
import toast, { Toaster } from 'react-hot-toast';
import css from "./CartPage.module.css";

const CartPage = () => {
  const favorites = useSelector(selectFavorites);

  // Calculate totals
  const subtotal = favorites.reduce((sum, item) => sum + (item.price || 0), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const currentDate = new Date();
  const estimatedDelivery = new Date(currentDate);
  estimatedDelivery.setDate(currentDate.getDate() + 3);

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleCheckout = () => {
    const purchasePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (favorites.length > 0) {
          resolve();
        } else {
          reject(new Error('Cart is empty'));
        }
      }, 2000);
    });

    toast.promise(
      purchasePromise,
      {
        loading: 'Processing your order...',
        success: () => {
          const orderNumber = `ORD-${Date.now()}`;
          return (
            <div>
              <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                🎉 Order Confirmed!
              </div>
              <div style={{ fontSize: '14px' }}>
                Order #: {orderNumber}
                <br />
                Total: ${total.toFixed(2)}
                <br />
                Estimated delivery: {formatDate(estimatedDelivery)}
              </div>
            </div>
          );
        },
        error: (error) => `Purchase failed: ${error.message}`
      },
      {
        style: {
          minWidth: '350px',
          borderRadius: '10px',
          background: '#363636',
          color: '#fff',
        },
        success: {
          duration: 6000,
          icon: '✅',
        },
        error: {
          duration: 4000,
          icon: '❌',
        },
      }
    );

    toast.success('🛒 Items reserved for 30 minutes', {
      duration: 3000,
      position: 'bottom-left',
    });
  };

  const handleAddPromoCode = () => {
    toast('🎁 Promo code applied! $10 discount', {
      icon: '✅',
      duration: 3000,
      position: 'top-right',
    });
  };

  const handleFreeShippingNotice = () => {
    if (subtotal < 50) {
      toast.loading(`Add $${(50 - subtotal).toFixed(2)} more for FREE shipping!`, {
        duration: 4000,
        position: 'bottom-center',
        style: {
          background: '#3498db',
          color: 'white',
        },
      });
    }
  };

  return (
    <div className="container">
      {/* Toast Container */}
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 4000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />

      {favorites.length === 0 ? (
        <div className={css.emptyCart}>
          <h2 className={css.emptyTitle}>Your cart is empty</h2>
          <p className={css.emptyText}>Start shopping to add items to your cart</p>
          <button className={css.shopButton}>Continue Shopping</button>
        </div>
      ) : (
        <div className={css.cartContainer}>
          <div className={css.cartHeader}>
            <h1 className={css.title}>Shopping Cart</h1>
            <p className={css.itemCount}>{favorites.length} {favorites.length === 1 ? 'item' : 'items'}</p>
          </div>

          <div className={css.cartContent}>
            <div className={css.itemsSection}>
              <h2 className={css.sectionTitle}>Your Items</h2>
              <Catalog items={favorites} />
            </div>

            <div className={css.orderSummary}>
              <div className={css.summaryCard}>
                <h3 className={css.summaryTitle}>Order Summary</h3>
                
                <div className={css.summaryRow}>
                  <span>Subtotal ({favorites.length} items)</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                
                <div className={css.summaryRow}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                
                <div className={css.summaryRow}>
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <div className={css.divider}></div>
                
                <div className={`${css.summaryRow} ${css.total}`}>
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className={css.shippingInfo}>
                  <h4>Delivery Information</h4>
                  <p>Order date: {formatDate(currentDate)}</p>
                  <p>Estimated delivery: {formatDate(estimatedDelivery)}</p>
                  {subtotal < 50 && (
                    <p 
                      className={css.freeShippingNote}
                      onClick={handleFreeShippingNotice}
                      style={{cursor: 'pointer'}}
                    >
                      Add ${(50 - subtotal).toFixed(2)} more for FREE shipping!
                    </p>
                  )}
                </div>

                <button 
                  className={css.checkoutButton}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>

                <div className={css.securityNote}>
                  <span>🔒 Secure checkout</span>
                  <span>✓ 30-day return policy</span>
                </div>
              </div>

              <div className={css.promoSection}>
                <h4>Have a promo code?</h4>
                <div className={css.promoInput}>
                  <input type="text" placeholder="Enter code" />
                  <button onClick={handleAddPromoCode}>Apply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;