import { Button } from "@/components/ui/button";
import CommonForm from "@/components/common/form";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import React, { Fragment, useState } from "react";
import { addProductFormElements } from "@/config";
import ImageUpload from "@/components/admin/ImageUpload";
import { use } from "react";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};

const AdminProducts = () => {
  const [openCreateProduct, setOpenCreateProduct] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const onSubmit = () => {};

  return (
    <Fragment>
      <div className="mb-5 w-full  flex justify-end">
        <Button onClick={() => setOpenCreateProduct(true)}>Add Products</Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet
        open={openCreateProduct}
        onOpenChange={() => {
          setOpenCreateProduct(false);
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Add New Product</SheetTitle>
          </SheetHeader>
          <ImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
          />
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              formControls={addProductFormElements}
              buttonText="Add"
            ></CommonForm>
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default AdminProducts;
