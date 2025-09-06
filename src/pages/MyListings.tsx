import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useProducts } from '@/hooks/useProducts';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';

const MyListings = () => {
  const { products, deleteProduct } = useProducts();
  const { user } = useAuth();
  const { toast } = useToast();

  const userProducts = products.filter(product => product.sellerId === user?.id);

  const handleDelete = (productId: string, productTitle: string) => {
    if (window.confirm(`Are you sure you want to delete "${productTitle}"?`)) {
      deleteProduct(productId);
      toast({ title: 'Product deleted successfully' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-primary">My Listings</h1>
          <Link to="/add-product">
            <Button className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              Add New Product
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        {userProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-primary">
                      ${product.price}
                    </span>
                    <span className="text-xs bg-sage/20 text-sage-foreground px-2 py-1 rounded">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <Link to={`/edit-product/${product.id}`} className="flex-1">
                      <Button variant="outline" className="w-full flex items-center gap-2">
                        <Edit className="w-4 h-4" />
                        Edit
                      </Button>
                    </Link>
                    <Button 
                      variant="destructive"
                      onClick={() => handleDelete(product.id, product.title)}
                      className="flex items-center gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="mb-4">
              <Plus className="w-16 h-16 mx-auto text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No listings yet</h3>
            <p className="text-muted-foreground mb-6">
              Start selling by creating your first product listing
            </p>
            <Link to="/add-product">
              <Button>Add Your First Product</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyListings;