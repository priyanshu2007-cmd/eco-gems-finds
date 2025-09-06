import { Package, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useProducts } from '@/hooks/useProducts';
import { useAuth } from '@/hooks/useAuth';
import Header from '@/components/Header';

const PreviousPurchases = () => {
  const { getUserPurchases } = useProducts();
  const { user } = useAuth();

  const userPurchases = user ? getUserPurchases(user.id) : [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-3 mb-8">
            <Package className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-primary">Previous Purchases</h1>
          </div>

          {userPurchases.length > 0 ? (
            <div className="space-y-6">
              {userPurchases.map((purchase) => (
                <Card key={purchase.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        Order #{purchase.id.slice(-8)}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {purchase.purchaseDate}
                      </div>
                    </div>
                  </CardHeader>
                  
                  {purchase.product && (
                    <CardContent>
                      <div className="flex gap-4">
                        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={purchase.product.image} 
                            alt={purchase.product.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{purchase.product.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                            {purchase.product.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Badge variant="secondary">
                                {purchase.product.category}
                              </Badge>
                              <Badge variant="outline">
                                {purchase.product.condition}
                              </Badge>
                            </div>
                            
                            <div className="text-right">
                              <p className="font-bold text-primary">
                                ${purchase.price.toFixed(2)}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                Purchased
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
              
              {/* Purchase Summary */}
              <Card className="bg-sage/5">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Purchase Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Total Orders</p>
                        <p className="font-bold text-lg">{userPurchases.length}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Total Spent</p>
                        <p className="font-bold text-lg text-primary">
                          ${userPurchases.reduce((sum, p) => sum + p.price, 0).toFixed(2)}
                        </p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Items Saved from Waste</p>
                        <p className="font-bold text-lg text-eco-dark">{userPurchases.length}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center py-12">
              <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No purchases yet</h3>
              <p className="text-muted-foreground mb-6">
                Start shopping to see your purchase history here
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviousPurchases;